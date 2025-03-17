import {
  TZKTLSService,
  TProofProvider
} from '@/types'
import type { TInitialState } from '../types'
import { PayloadAction } from '@reduxjs/toolkit'

const setZKTLSOptionsAction = (state: TInitialState, action: PayloadAction<{
  zkTLSService: TZKTLSService,
  proofProvider: TProofProvider,
  appID: string,
  secret: string,
  providerID: string,
  handleKey: string,
}>) => {
  const {
    zkTLSService,
    proofProvider,
    appID,
    providerID,
    secret,
    handleKey
  } = action.payload

  let result: {
    zkTLSService: TZKTLSService,
    proofProvider: TProofProvider,
    appID?: string,
    secret?: string,
    providerID?: string,
    handleKey?: string,
  } = {
    zkTLSService,
    proofProvider
  }

  if (proofProvider === 'custom') {
    result = {
      ...result,
      appID,
      providerID,
      secret,
      handleKey
    }
  }

  console.log({
    result
  })

   return {
    ...state,
    ...result
   }
}

export default setZKTLSOptionsAction
