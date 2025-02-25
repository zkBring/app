import { TDrop } from '@/types'
import { AxiosResponse } from 'axios'

type TPopLinkResponse = {
  success: boolean,
  encrypted_claim_link: string,
  reclaimVerificationURL: string
}

export type TPopLink = (
  multiscanQRId: string
) => Promise<AxiosResponse<TPopLinkResponse>>
