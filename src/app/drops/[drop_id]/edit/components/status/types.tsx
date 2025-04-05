import { TDropStatus } from '@/types'

type TProps = {
  status: TDropStatus
  stop: () => Promise<void>
}

export default TProps
