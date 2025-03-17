import {
  TTokenStandard,
  TLaunchStage,
  TClaimPattern,
  TZKTLSService,
  TProofProvider,
  TLaunchTransactionStage
} from '@/types'

export interface TInitialState {
  // token data
  tokenAddress: string | null
  tokenStandard: TTokenStandard | null
  decimals: number | null
  symbol: string | null
  tokensPerClaim: string | null
  totalClaims: string | null



  // campaign data
  title?: string | null
  description?: string | null


  // audience
  zkTLSService: TZKTLSService | null
  proofProvider: TProofProvider | null
  appID: string | null
  secret: string | null 
  providerID: string | null
  handleKey: string | null



  
  campaignAddress?: string | null 
  loading: boolean
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

}
