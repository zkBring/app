import { ethers } from 'ethers'
import { ERC20Contract } from '@/abi'

type TDefineIfUserOwnsContractERC20 = (
  userAddress: string,
  tokenAddress: string,
  signer: any
) => Promise<boolean>

const defineIfUserOwnsContractERC20: TDefineIfUserOwnsContractERC20 = async (
  userAddress,
  tokenAddress,
  signer
) => {
  try {
    const contractInstance = new ethers.Contract(tokenAddress, ERC20Contract, signer)
    console.log({ contractInstance })
    const tokenAmount: bigint = await contractInstance.balanceOf(userAddress)
    console.log({ tokenAmount })
    // const decimals = await contractInstance.decimals()
    return tokenAmount > BigInt(0)
  } catch (err) {
    console.log({
      err
    })
    return false
  }
}

export default defineIfUserOwnsContractERC20