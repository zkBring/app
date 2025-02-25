import { TDrop } from '@/types'
import { AxiosResponse } from 'axios'

type TGetDropResponse = {
  success: boolean,
  campaign: TDrop
}

export type TGetDrop = (
  campaignId: string
) => Promise<AxiosResponse<TGetDropResponse>>
