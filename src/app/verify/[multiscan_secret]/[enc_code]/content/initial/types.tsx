import {
  TDispenserError,
  TProviderType
} from '@/types'

export type TProps = {
  children?: React.ReactNode
  verificationUrl: string | null
  tokenAmount: string | null
  tokenSymbol: string | null
  providerType: TProviderType | null
  tokenImage: string | null
  decimals: number | null
  onSubmit: () => void
}