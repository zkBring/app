import { createAsyncThunk } from '@reduxjs/toolkit'
import type { TInitialState } from '../types'
import {
  authorization as authApi
} from '@/app/api'

type TArgs = {
  signer: any
  message: string
  timestamp: number
}

const authorize = createAsyncThunk(
  'user/authorize',
  async ({
    signer,
    message,
    timestamp
  }: TArgs, { getState }) => { 
    const state = getState() as { user: TInitialState }

    const {
      user: {
        address,
        chainId
      }
    } = state

    console.log({
      address,
      chainId
    })

    if (
      address &&
      chainId
    ) {
      try {
        const sig = await signer.signMessage(String(message))
        const result = await authApi.signIn(
          message,
          timestamp,
          sig,
          address.toLowerCase(),
          chainId as number
        )

        console.log({
          result
        })
      } catch (err) {
        console.log({ err })
      }
    }
    
    
  }
)

export default authorize

