import { JsonRpcSigner } from 'ethers'
import {
  TAuthorizationStep
} from '@/types'

export type TInitialState = {
  address: string | null
  chainId: number | null
  signer: JsonRpcSigner | null
  authorizationStep: TAuthorizationStep
}