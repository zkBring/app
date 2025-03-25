import {
  FC
} from 'react'
import TProps from './types'
import {
  WidgetStyled
} from './styled-components'
import { TDropStatus } from '@/types'
import {
  Text
} from './styled-components'

const defineStatus = (
  status: TDropStatus
) => {
  switch (status) {
    case 'active':
      return 'In progress'
    case 'initial':
    case 'pending':
      return 'Loading'
    case 'paused':
      return 'Paused'
    default:
      return 'In progress'
  }
}

const Status: FC<TProps> = ({
  drop,
  status,
  setStatus
}) => {

  return <WidgetStyled
    title="Drop status"
  >
    <Text>{defineStatus(status)}</Text> 
  </WidgetStyled>
}

export default Status