import { TDispenserError } from "@/types"

type TProps = {
  error: TDispenserError | null
  claimLink: string | null
  errorText?: string | null
}

export default TProps