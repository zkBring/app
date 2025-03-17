import { createAsyncThunk } from '@reduxjs/toolkit'
import type { TInitialState } from '../types'
import { ethers } from 'ethers'

const approve = createAsyncThunk(
  'launch/secure',
  async (totalAmount: string, { getState }) => { 
    const state = getState() as TInitialState
    try {

      // const contract = contracts[chainId]
      // dispatch(campaignActions.setLoading(true))
      // const newWallet = ethers.Wallet.createRandom()
      // const { address: wallet, privateKey } = newWallet
      // const factoryContract = new ethers.Contract(contract.factory, LinkdropFactory.abi, signer)
      // const isDeployed = await factoryContract.isDeployed(address, id)
      // let data
      // let to
      // const proxyContract = new ethers.Contract(proxyContractAddress, LinkdropMastercopy.abi, signer)
      
      
      // if (!isDeployed) {
      //   let iface = new utils.Interface(LinkdropFactory.abi)
      //   data = iface.encodeFunctionData('deployProxyWithSigner', [
      //     id, wallet, claimPattern === 'mint' ? 1 : 0
      //   ])
      //   to = contract.factory
      // } else {
      //   let iface = new utils.Interface(LinkdropMastercopy.abi)
      //   data = iface.encodeFunctionData('addSigner', [
      //     wallet
      //   ])
      //   to = proxyContractAddress
      // }
    
      // await signer.sendTransaction({
      //   to,
      //   from: address,
      //   value: '0',
      //   data: data
      // })
    
      // const checkTransaction = async function (): Promise<boolean> {
      //   return new Promise((resolve, reject) => {
      //     const checkInterval = setInterval(async () => {
      //       try {
      //         const res = await proxyContract.isLinkdropSigner(wallet)
      //         if (res) {
      //           resolve(true)
      //           clearInterval(checkInterval)
      //         }
      //       } catch (err) {
      //         console.log({ err })
      //       }
            
      //     }, 3000)
      //   })
      // }
      // const finished = await checkTransaction()
      
    } catch (error) {
      console.log(error)
    }
  }
)

export default approve