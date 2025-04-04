import {
  FC
} from 'react'
import TProps from './types'
import {
  WidgetStyled,
  SmallSubtitleStyled
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
      return 'Active'
    case 'stopped':
      return 'Stopped'
    case 'expired':
      return 'Expired'
    case 'finished':
      return 'Finished'
    default:
      return 'Loading'
  }
}

const Status: FC<TProps> = ({
  dropInstance,
}) => {
  if (!dropInstance) {
    return null
  }
  return <WidgetStyled>
    <SmallSubtitleStyled>Drop status</SmallSubtitleStyled>
    <Text>{defineStatus(dropInstance.status)}</Text> 
  </WidgetStyled>
}

export default Status