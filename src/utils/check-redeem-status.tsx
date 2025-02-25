
import { ClaimLink, ClaimLinkV3_11 } from 'linkdrop-sdk'
import { defineJSONRPC } from '@/utils'
import { ethers } from 'ethers'

type TCheckRedeemTxHash = (
  claimLink: ClaimLink | ClaimLinkV3_11,
  txHash: string,
  chainId: number,
  optimisticClaimUI: boolean
) => Promise<boolean>

const checkRedeemStatus: TCheckRedeemTxHash = (
  claimLink,
  txHash,
  chainId,
  optimisticClaimUI
) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const interval = window.setInterval(async () => {
        if (claimLink) {
          const statusData = await claimLink.getStatus()
          if (statusData) {
            const { status } = statusData
            if (status === 'redeeming') {
              if (optimisticClaimUI) {
                resolve(true)
                clearInterval(interval)
              }
            } else if (status === 'redeemed') {
              resolve(true)
              clearInterval(interval)
            } else if (
              status === 'cancelled' ||
              status === 'error'
            ) {
              reject()
            } else if (status === 'deposited') {
              // second claim for the same batch to the same wallet address
              const jsonRpcUrl = defineJSONRPC(chainId as number)
              const provider = new ethers.JsonRpcProvider(jsonRpcUrl, chainId as number, {
                staticNetwork: true
              })
              const receipt = await provider.getTransactionReceipt(txHash)
              if (receipt && receipt.status !== undefined && receipt.status === 1) {
                resolve(true)
              }
            }
          }
        }
      }, 1000)
    })()
  })
}

export default checkRedeemStatus