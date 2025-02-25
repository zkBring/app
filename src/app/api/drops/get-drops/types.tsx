import { TDrop } from '@/types'
import { AxiosResponse } from 'axios'

type TGetDropsResponse = {
  success: boolean,
  campaigns_array: TDrop[]
}

export type TGetDrops = (
  query?: string,
  offset?: number,
  limit?: number
) => Promise<AxiosResponse<TGetDropsResponse>>
