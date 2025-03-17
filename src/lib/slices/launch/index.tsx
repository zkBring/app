import {
  TLaunchAsset,
  TTokenStandard
} from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'
import {
  setZKTLSOptionsAction,
  setTokenDataAction,
  setDropDataAction
} from './actions'
import { approve } from './async-actions'

const initialState: TInitialState = {
  title: null,
  description: null,
  tokenAddress: null,
  campaignAddress: null,
  tokenStandard: 'ERC20',
  loading: false,
  decimals: null,
  symbol: null,
  wallet: null,
  proxyContractAddress: null,
  approved: false,
  id: null,
  secured: false,
  signerKey: null,
  signerAddress: null,
  claimPattern: null,
  expirationDate: null,
  preferredWalletOn: false,
  additionalWalletsOn: false,
  launchStage: 'initial',
  transactionStage: 'initial',
  zkTLSService: null,
  proofProvider: null,
  appID: null,
  secret: null,
  providerID: null,
  handleKey: null,
  totalClaims: null,
  tokensPerClaim: null
}

const launchSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    setLaunchTitle: (state, action: PayloadAction<string>) => ({
      ...state, title: action.payload
    }),

    setLaunchDescription: (state, action: PayloadAction<string>) => ({
      ...state, description: action.payload
    }),

    setLaunchTokenAddress: (state, action: PayloadAction<string>) => ({
      ...state, tokenAddress: action.payload
    }),

    setLaunchTokenStandard: (state, action: PayloadAction<TTokenStandard>) => ({
      ...state, tokenStandard: action.payload
    }),

    setLaunchAssets: (state, action: PayloadAction<TLaunchAsset[]>) => ({
      ...state, assets: action.payload
    }),

    setZKTLSOptions: setZKTLSOptionsAction,
    setTokenData: setTokenDataAction,
    setDropData: setDropDataAction
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(approve.fulfilled, (state, action) => {
      // Add user to the state array
      console.log({
        action,
        state
      }) 
    })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = launchSlice
// Extract and export each action creator by name
const {
  setLaunchTitle,
  setLaunchDescription,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setLaunchAssets,
  setZKTLSOptions,
  setTokenData,
  setDropData,
} = actions

export {
  setLaunchTitle,
  setLaunchDescription,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setLaunchAssets,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  approve
}

// Export the reducer, either as a default or named export
export default reducer