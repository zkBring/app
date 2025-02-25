import React from "react"
import {
  TTokenData,
  TLinkItemStatus,
  TLinkParams
} from '@/types'

export type TProps = {
  children?: React.ReactNode
  linkParams?: TLinkParams
  tokenData?: TTokenData
  status?: TLinkItemStatus
  error: number | null
}

