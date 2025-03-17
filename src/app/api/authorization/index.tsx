import TRequest from './types'
import axios from 'axios'
import { 
  dashboardServerURL,
  dashboardApiKey
} from '@/app/configs'

const signIn: TRequest = (
  msg,
  timestamp,
  sig,
  userAddress,
  chainId
) => {
  return axios.post(`${dashboardServerURL}/api/v2/dashboard/auth`, {
    sig,
    timestamp,
    user_address: userAddress,
    msg,
    chain_id: chainId
  }, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${dashboardApiKey as string}`
    }
  })
}

export default {
  signIn
}