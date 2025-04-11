import { Drop } from "zkbring-sdk"
import { TDrop } from '@/types'

type TProps = {
  onStart: () => void
  dropInstance: Drop | null
  drop: TDrop
}

export default TProps