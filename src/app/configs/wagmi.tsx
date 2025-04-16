import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {
  baseSepolia,
  base,
  mainnet,
  polygon,
  arbitrum,
  optimism,
  avalanche
} from 'wagmi/chains'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'

import {
  projectId
} from '@/app/configs'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [
  baseSepolia,
  base,
  mainnet,
  polygon,
  arbitrum,
  optimism,
  avalanche
]

const wagmiConfig = {
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks,
  connectors: [
    coinbaseWallet(),
    walletConnect({
      projectId: 'bb452af261737ea08a96cf85ad67a8e1',
    }),
  ]
}

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter(wagmiConfig)

export const config = wagmiAdapter.wagmiConfig