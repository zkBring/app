import type { TInitialState } from '../types'
import { PayloadAction } from '@reduxjs/toolkit'

type TArgs = {
  title: string,
  description: string
}

const setDropData = (state: TInitialState, action: PayloadAction<TArgs>) => {
  const {
    title,
    description
  } = action.payload

   return {
    ...state,
    title,
    description
   }
}

export default setDropData
