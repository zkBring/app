import { TGetDispenserData } from './types'
import { defineApiHeaders } from '@/utils'
import axios from 'axios'
import { 
  dashboardServerURL
} from '@/app/configs'

const getMultiQRCampaignData: TGetDispenserData = (
  multiscanQRId,
  multiscanQREncCode
) => {

  const headers = defineApiHeaders()
  return axios.get(`${dashboardServerURL}/api/v2/claimer/dispensers/multiscan-qrs/${multiscanQRId}/campaign`,
    {
      headers,
      params: {
        multiscanQREncCode: multiscanQREncCode
      }
    }
  )
}

export default getMultiQRCampaignData