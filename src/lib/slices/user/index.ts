import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInitialState } from './types'

const initialState: TInitialState = {
  address: null,
  chain_id: null
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
      return {...state, chain_id: action.payload }
    },
  },
  extraReducers: () => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(initialLoad.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   return {
    //     ...state,
    //     sdk: action.payload
    //   }
    // })
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = userSlice
// Extract and export each action creator by name
export const { setUserChainId, setUserAddress } = actions
// Export the reducer, either as a default or named export
export default reducer