import { Drop } from "zkbring-sdk"

type TProps = {
  onClose: () => void
  dropInstance: Drop | null
  setClaimIsReady: () => void
  showTransgateDialog: () => void
}

export default TProps