import React from "react"
import { TClaimScreen} from '@/types'

export type TProps = {
  children?: React.ReactNode

  setScreen: (screen: TClaimScreen) => void

  onClose: () => void
}