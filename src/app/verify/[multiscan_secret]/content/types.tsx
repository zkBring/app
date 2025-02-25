import React from "react"
import {
  TDispenserError,
  TProviderType
} from '@/types'

export type TProps = {
  children?: React.ReactNode
  reclaimVerificationURL: string | null
  tokenAmount: string | null
  tokenSymbol: string | null
  providerType: TProviderType | null
  tokenImage: string | null
  decimals: number | null
  error: TDispenserError | null
}

