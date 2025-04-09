import { Dispatch } from 'redux'
import {
  IConnectorError
} from '@/types'
import {
  toHex,
  alertError
} from '@/utils'
import chains from '@/app/configs/chains'
import { BrowserProvider } from 'ethers'

async function switchNetwork (
  chainId: number,
  provider: BrowserProvider,
  callback: () => void
) {
  if (!chainId) {
    return alertError('Current chain ID is not provided')
  }
  try {
    // @ts-ignore
    await provider.send('wallet_switchEthereumChain',
      [{
        chainId: toHex(chainId)
      }],
    )
    callback && callback()
  } catch (err) {
    const switchError = err as IConnectorError
    if (switchError.code && switchError.code === 4902) {
      try {
        const chainObj = chains[chainId]
        if (chainObj) {
          const data = {
            chainName: chainObj.chainName,
            nativeCurrency: chainObj.nativeCurrency,
            rpcUrls: chainObj.rpcUrls,
            blockExplorerUrls: chainObj.blockExplorerUrls,
            chainId: toHex(chainId)
          }

          // @ts-ignore
          await provider.send('wallet_addEthereumChain',
          [
            data
          ],
        )
          callback && callback()
        }
      } catch (err) {
        alertError('Check console for more information')
        callback && callback()
        console.error({ err })
      }
    }
  }
}

export default switchNetwork