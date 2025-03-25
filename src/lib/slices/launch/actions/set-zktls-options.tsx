import {
  TZKTLSService,
  TProofProvider
} from '@/types'
import type { TInitialState } from '../types'
import { PayloadAction } from '@reduxjs/toolkit'

const setZKTLSOptionsAction = (state: TInitialState, action: PayloadAction<{
  zkTLSService: TZKTLSService,
  proofProvider: TProofProvider,
  zkPassAppId: string,
  zkPassSchemaId: string
}>) => {
  const {
    zkTLSService,
    proofProvider,
    zkPassAppId,
    zkPassSchemaId
  } = action.payload

  let result: {
    zkTLSService: TZKTLSService,
    proofProvider: TProofProvider,
    zkPassAppId?: string,
    zkPassSchemaId?: string
  } = {
    zkTLSService,
    proofProvider
  }

  if (proofProvider === 'custom') {
    result = {
      ...result,
      zkPassAppId,
      zkPassSchemaId
    }
  }


   return {
    ...state,
    loading: false,
    ...result
   }
}

export default setZKTLSOptionsAction
