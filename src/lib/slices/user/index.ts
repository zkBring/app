import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'
import { authorize } from './async-actions'
import { JsonRpcSigner } from 'ethers'

const initialState: TInitialState = {
  address: null,
  chainId: null,
  signer: null,
  authorizationStep: 'initial'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAddress(
      state,
      action: PayloadAction<string | null>
    ) {
      return {...state, address: action.payload }
    },
    setUserChainId(
      state,
      action: PayloadAction<number | null>
    ) {
      return {...state, chainId: action.payload }
    },
    setSigner(
      state,
      action: PayloadAction<JsonRpcSigner | null>
    ) {
      return {...state, signer: action.payload }
    },
    setConnectedUserData (state, action: PayloadAction<{
      address: string
      chainId: number
      signer: JsonRpcSigner | null
    }>) {
      const {
        address,
        chainId,
        signer
      } = action.payload

      console.log('setConnectedUserData', {
        address,
        chainId,
        signer
      })
      return {
        ...state,
        address,
        chainId,
        signer,
        authorizationStep: 'login'
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authorize.fulfilled, (state, action) => {
      // Add user to the state array
      state.authorizationStep = 'authorized'

      console.log({ state })
      return state
    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = userSlice
// Extract and export each action creator by name
const {
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData
} = actions

export {
  setUserChainId,
  setUserAddress,
  authorize,
  setSigner,
  setConnectedUserData
}

// Export the reducer, either as a default or named export
export default reducer