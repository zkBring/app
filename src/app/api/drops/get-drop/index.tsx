import { TGetDrop } from './types'
import axios from 'axios'
import { 
  dashboardServerURL,
  dashboardApiKey
} from '@/app/configs'

const getDrop: TGetDrop = (
  droptId
) => {

  return axios.get(`${dashboardServerURL}/api/v2/dashboard/campaigns/${droptId}`, {
    headers: {
      'Authorization': `Bearer ${dashboardApiKey}`
    }
  })
}

export default getDrop