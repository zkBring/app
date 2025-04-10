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
import {
  Button
} from '@/components/common'

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
  status,
  stop
}) => {
  if (!status) {
    return null
  }
  return <WidgetStyled>
    <SmallSubtitleStyled>Drop status</SmallSubtitleStyled>
    <Text>{defineStatus(status)}</Text>
    <Button
      size='small'
      onClick={stop}
    >
      Stop drop
    </Button>
  </WidgetStyled>
}

export default Status