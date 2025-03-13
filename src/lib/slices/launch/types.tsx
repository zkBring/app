import {
  TTokenStandard,
  TLaunchStage,
  TClaimPattern,
  TLaunchAsset,
  TZKTLSService,
  TProofProvider,
  TLaunchTransactionStage
} from '@/types'

export interface TInitialState {
  title?: string | null
  description?: string | null
  tokenAddress: string | null
  campaignAddress?: string | null 
  tokenStandard: TTokenStandard | null
  assets: TLaunchAsset[] | null
  loading: boolean
  decimals: number | null
  symbol: string | null
  wallet: string | null
  proxyContractAddress: string | null
  approved: boolean | null
  id: null | string
  secured: boolean
  signerKey: string | null
  signerAddress: string | null
  claimPattern: TClaimPattern | null
  expirationDate: number | null
  preferredWalletOn: boolean | null
  additionalWalletsOn: boolean | null
  launchStage: TLaunchStage | null
  transactionStage: TLaunchTransactionStage | null
  zkTLSService: TZKTLSService | null
  proofProvider: TProofProvider | null
  appId: string | null
  secret: string | null 
  providerId: string | null
  handleKey: string | null
}
