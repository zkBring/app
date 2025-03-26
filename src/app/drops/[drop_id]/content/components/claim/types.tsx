import { Drop } from "zkbring-sdk"

type TProps = {
  symbol: string
  amount: string
  disabled: boolean
  dropInstance: Drop | null
  webproof?: any
  ephemeralKey?: string | null
  recipient: null | string
}

export default TProps
