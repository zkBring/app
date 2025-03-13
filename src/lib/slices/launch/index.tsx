import { TLaunchAsset, TTokenStandard } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'

const initialState: TInitialState = {
  title: null,
  description: null,
  tokenAddress: null,
  campaignAddress: null,
  tokenStandard: 'ERC20',
  assets: null,
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
  appId: null,
  secret: null,
  providerId: null,
  handleKey: null
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
   
  },
  extraReducers: () => {
    
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = launchSlice
// Extract and export each action creator by name
export const {
  setLaunchTitle,
  setLaunchDescription,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setLaunchAssets
} = actions
// Export the reducer, either as a default or named export
export default reducer