import { Drop } from "zkbring-sdk"

type TProps = {
  onClose: () => void
  dropInstance: Drop | null
  setClaimIsReady: (
    webproof: any,
    ephemeralKey: string
  ) => void

  showTransgateDialog: () => void
}

export default TProps