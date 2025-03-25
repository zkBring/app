import TRequest from './types'
import axios from 'axios'
import { 
  dashboardServerURL,
  dashboardApiKey
} from '@/app/configs'

const getNonce: TRequest = (userAddress: string) => {
  return axios.post(`${dashboardServerURL}/api/v2/nonce`, {
    user_address: userAddress.toLowerCase()
  }, {
    headers: {
      'Authorization': `Bearer ${dashboardApiKey}`
    }
  })
}

export default {
  get: getNonce
}