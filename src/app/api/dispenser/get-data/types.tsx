import { TDrop } from '@/types'
import { AxiosResponse } from 'axios'

type TGetDispenserDataResponse = {
  success: boolean,
  campaign: TDrop,
  reclaimVerificationURL: string
}

export type TGetDispenserData = (
  multiscanQRId: string,
  multiscanQREncCode: string
) => Promise<AxiosResponse<TGetDispenserDataResponse>>
