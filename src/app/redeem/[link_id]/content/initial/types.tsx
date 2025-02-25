import {
  TLinkParams,
  TTokenData,
  TClaimScreen
} from '@/types'

export type TProps = {
  children?: React.ReactNode
  linkParams: TLinkParams
  tokenData: TTokenData
  setScreen: (screen: TClaimScreen) => void
}