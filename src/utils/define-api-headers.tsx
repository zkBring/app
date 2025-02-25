import { dashboardApiKey } from '@/app/configs'

type TDefineApiHeaders = () => Record<string, string>

const defineApiHeaders: TDefineApiHeaders = () => {
  const headers: Record<string, string> = {}
  headers['authorization'] = `Bearer ${dashboardApiKey}`
  return headers
}

export default defineApiHeaders