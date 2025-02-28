import { TPopLink } from './types'
import { defineApiHeaders } from '@/utils'
import axios from 'axios'
import { 
  dashboardServerURL
} from '@/app/configs'

const popLink: TPopLink = (
  multiscanQRId,
  reclaimSessionId
) => {

  const headers = defineApiHeaders()


  return axios.post(`${dashboardServerURL}/api/v2/dashboard/dispensers/pop-reclaim/multiscan-qrs/${multiscanQRId}`, {
      reclaim_session_id: reclaimSessionId
    },
    {
      headers
    }
  )
}

export default popLink