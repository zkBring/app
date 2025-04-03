import { configureStore } from '@reduxjs/toolkit'
import {
  ClaimSlice,
  UserSlice,
  TokenSlice,
  LaunchSlice,
  VerifySlice
} from './slices'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: UserSlice,
      claim: ClaimSlice,
      token: TokenSlice,
      launch: LaunchSlice,
      verify: VerifySlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']