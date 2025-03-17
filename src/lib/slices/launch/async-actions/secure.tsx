import { createAsyncThunk } from '@reduxjs/toolkit'
import type { TInitialState } from '../types'
import { ethers } from 'ethers'

const approve = createAsyncThunk(
  'launch/approve',
  async (totalAmount: string, { getState }) => { 
    const state = getState() as TInitialState
    try {
      console.log({ totalAmount })
      alert('APPROVE')
      // if (!amountToApprove) {
      //   dispatch(campaignActions.setLoading(false))
      //   return alertError(`Cannot define amount of tokens to approve`)
      // }
    
      // const contractInstance = new ethers.Contract(tokenAddress, ERC20Contract.abi, signer)
      // let iface = new utils.Interface(ERC20Contract.abi)
      // const alreadyAllowed = await contractInstance.allowance(address, proxyContractAddress)
    
      // if (alreadyAllowed.gte(amountToApprove)) {
      //   dispatch(campaignActions.setLoading(false))
      //   dispatch(campaignActions.setApproved(true))
      //   if (callback) { callback() }
      //   return alertError(`Already approved`)
      // }
    
      // const tokenAmount = await contractInstance.balanceOf(address)
    
      // console.log({ tokenAmount, decimals })
    
          
      // if (amountToApprove.gt(tokenAmount)) {
      //   dispatch(campaignActions.setLoading(false))
      //   return alertError(
      //     `Not enough tokens to approve. Tokens to approve: ${amountToApprove}`
      //   )
      // }
    
      // // const formatted = ethers.utils.parseUnits(String(amountToApprove), decimals)
    
      // let data = iface.encodeFunctionData('approve', [
      //   proxyContractAddress, String(amountToApprove)
      // ])
    
      // await signer.sendTransaction({
      //   to: tokenAddress,
      //   from: address,
      //   value: 0,
      //   data: data
      // })
    
      // const checkTransaction = async function (): Promise<boolean> {
      //   return new Promise((resolve) => {
      //     const checkInterval = setInterval(async () => {
      //       const allowed = await contractInstance.allowance(address, proxyContractAddress)
      //       if (allowed.gte(amountToApprove)) {
      //         resolve(true)
      //         clearInterval(checkInterval)
      //       }
      //     }, 3000)
      //   })
      // }
      // await checkTransaction()


      
    } catch (error) {
      console.log(error)
    }
  }
)

export default approve