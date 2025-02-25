import {
  TLinkParams,
  TTokenData,
  TClaimScreen,
  TClaimError
} from '@/types'

export type TProps = {
  children?: React.ReactNode
  linkParams: TLinkParams
  tokenData: TTokenData
  setScreen: (screen: TClaimScreen | TClaimError) => void
}