import React from "react"
import { TClaimError, TClaimScreen} from '@/types'

export type TProps = {
  children?: React.ReactNode

  setScreen: (screen: TClaimScreen | TClaimError) => void
  chainId: number
  onClose: () => void
}