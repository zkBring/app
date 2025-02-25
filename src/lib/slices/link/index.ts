import { TWalletName } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'

const initialState: TInitialState = {
  code: null,
  preferred_wallet: null,
  expiration_time: null,
  wei_amount: null,
  link_id: null,
  claiming_finished_description: null,
  claiming_finished_button_title: null,
  claiming_finished_button_url: null,
  claiming_finished_auto_redirect: false,
  claiming_finished_button_on: false,
  tx_hash: null,
  loading: false,
  chain_id: null,
  optimistic_claim_ui: true
}

const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    setLinkCode: (state, action: PayloadAction<string | null>) => ({
      ...state, code: action.payload
    }),
    setLinkOptimisticClaimUI: (state, action: PayloadAction<boolean>) => ({
      ...state, optimistic_claim_ui: action.payload
    }),
    setLinkLoading: (state, action: PayloadAction<boolean>) => ({
      ...state, loading: action.payload
    }),
    setLinkPreferredWallet: (state, action: PayloadAction<TWalletName | null>) => ({
      ...state, preferred_wallet: action.payload
    }),
    setLinkExpirationTime: (state, action: PayloadAction<number | null>) => ({
      ...state, expiration_time: action.payload
    }),
    setLinkTxHash: (state, action: PayloadAction<string | null>) => ({
      ...state, tx_hash: action.payload
    }),
    setLinkWeiAmount: (state, action: PayloadAction<string | null>) => ({
      ...state, wei_amount: action.payload
    }),
    setLinkId: (state, action: PayloadAction<string | null>) => ({
      ...state, link_id: action.payload
    }),
    setLinkClaimingFinishedDescription: (state, action: PayloadAction<string | null>) => ({
      ...state, claiming_finished_description: action.payload
    }),

    setLinkClaimingFinishedButtonTitle: (state, action: PayloadAction<string | null>) => ({
      ...state, claiming_finished_button_title: action.payload
    }),

    setLinkClaimingFinishedButtonOn: (state, action: PayloadAction<boolean | null>) => ({
      ...state, claiming_finished_button_on: action.payload
    }),

    setLinkChainId: (state, action: PayloadAction<number | null>) => ({
      ...state, chain_id: action.payload
    }),
    setLinkClaimingFinishedButtonHref: (state, action: PayloadAction<string | null>) => ({
      ...state, claiming_finished_button_url: action.payload
    }),

    setLinkClaimingFinishedAutoRedirect: (state, action: PayloadAction<boolean | null>) => ({
      ...state, claiming_finished_auto_redirect: action.payload
    }),
  },
  extraReducers: () => {
    
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = linkSlice
// Extract and export each action creator by name
export const {
  setLinkCode,
  setLinkPreferredWallet,
  setLinkExpirationTime,
  setLinkClaimingFinishedAutoRedirect,
  setLinkClaimingFinishedButtonHref,
  setLinkClaimingFinishedButtonTitle,
  setLinkClaimingFinishedDescription,
  setLinkId,
  setLinkWeiAmount,
  setLinkTxHash,
  setLinkLoading,
  setLinkChainId,
  setLinkClaimingFinishedButtonOn,
  setLinkOptimisticClaimUI
} = actions
// Export the reducer, either as a default or named export
export default reducer