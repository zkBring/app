import { ethers } from 'ethers'
import { TLaunchAsset } from '@/types'

const countLaunchAmounts = (
  assets: TLaunchAsset[],
  decimals: number
) => {
  if (!assets[0] || !assets[0].amount) {
    return {
      amount: '0',
      comission: '0',
      totalAmount: '0'
    }
  }
  const amount: bigint = BigInt(assets[0].amount) * BigInt(assets.length)
  const comission: bigint = amount / BigInt(1000) * BigInt(3)
  const totalAmount: bigint = amount + comission

  return {
    amount: ethers.formatUnits(amount, decimals),
    comission: ethers.formatUnits(comission, decimals),
    totalAmount: ethers.formatUnits(totalAmount, decimals)
  }
}

export default countLaunchAmounts