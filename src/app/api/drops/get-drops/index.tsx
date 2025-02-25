import { TGetDrops } from './types'
import { createQueryString } from '@/utils'
import axios from 'axios'
import { 
  dashboardServerURL,
  dashboardApiKey
} from '@/app/configs'

const getDrops: TGetDrops = (
    query,
    offset,
    limit
) => {
  const queryString = createQueryString({
    q: query,
    offset,
    limit
  })

  console.log({
    url: `${dashboardServerURL}/api/v2/dashboard/all-campaigns?${queryString}`
  })
  return axios.get(`${dashboardServerURL}/api/v2/dashboard/all-campaigns?${queryString}`, {
    headers: {
      'Authorization': `Bearer ${dashboardApiKey}`
    }
  })
}

export default getDrops