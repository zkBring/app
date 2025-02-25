import { TPopLink } from './types'
import { defineApiHeaders } from '@/utils'
import axios from 'axios'
import { 
  dashboardServerURL
} from '@/app/configs'

const popLink: TPopLink = (
  multiscanQRId
) => {

  const headers = defineApiHeaders()


  return axios.get(`${dashboardServerURL}/api/v2/claimer/dispensers/multiscan-qrs/${multiscanQRId}/campaign`,
    {
      headers
    }
  )
}

export default popLink