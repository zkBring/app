import { TDrop } from "@/types"
import { TDropStatus } from '@/types'

type TProps = {
  drop: TDrop
  status: TDropStatus
  setStatus: (status: TDropStatus) => void
}

export default TProps
