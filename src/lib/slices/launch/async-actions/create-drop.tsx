import { createAsyncThunk } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
import { BringSDK } from 'zkbring-sdk'
import type { TInitialState } from '../types'

type TArgs = {
  sdk: BringSDK
}

const zkPassSchemaId = 'c38b96722bd24b64b8d349ffd6391a8c'
const zkPassAppId = '6543a426-2afe-4efa-9d23-2d6ce8723e23'

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

        // zkPassSchemaId,
        // zkPassAppId
      }
    } = state

    console.log('sssss')

    const { txHash, waitForDrop } = await sdk.createDrop({
      token: tokenAddress as string,
      expiration: 1742477528995,
      zkPassSchemaId,
      zkPassAppId,
      maxClaims: BigInt(totalClaims as string),
      amount: ethers.parseUnits(tokensPerClaim as string, decimals as number),
      title: title as string,
      description: description as string
    })

    console.log('sssss111')


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