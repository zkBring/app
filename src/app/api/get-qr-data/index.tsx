import axios from 'axios'
import { 
  dashboardServerURL,
  dashboardApiKey
} from '@/app/configs'
import TRequest from './types'

const getQRData: TRequest = (qrId: string) => {
  return axios(`${dashboardServerURL}/api/v2/user/QR/${qrId}`, {
    headers: {
      'Authorization': `Bearer ${dashboardApiKey}`
    }
  })
}

export default getQRData
