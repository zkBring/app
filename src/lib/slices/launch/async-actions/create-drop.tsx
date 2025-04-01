import { createAsyncThunk } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import { BringSDK } from 'zkbring-sdk'
import type { TInitialState } from '../types'

type TArgs = {
  sdk: BringSDK
}

const createDrop = createAsyncThunk(
  'launch/createDrop',
  async (
    {
      sdk
    } :TArgs , { getState }) => { 
    const state = getState() as {
      launch: TInitialState
    }

    const {
      launch: {
        tokenAddress,
        tokensPerClaim,
        decimals,
        totalClaims,
        title,
        description,
        zkPassSchemaId,
        zkPassAppId
      }
    } = state

    console.log({
      zkPassSchemaId: zkPassSchemaId as string,
      zkPassAppId: zkPassAppId as string,
    })


    const { txHash, waitForDrop } = await sdk.createDrop({
      token: tokenAddress as string,
      expiration: 1742477528995,
      zkPassSchemaId: zkPassSchemaId as string,
      zkPassAppId: zkPassAppId as string,
      maxClaims: BigInt(totalClaims as string),
      amount: ethers.parseUnits(tokensPerClaim as string, decimals as number),
      title: title as string,
      description: description as string
    })

    console.log({
      txHash, waitForDrop
    })
    console.log('START WAIT FOR DROP')
    const drop = await waitForDrop()
    console.log('FINISH WAIT FOR DROP')

    return drop
  }
)

export default createDrop