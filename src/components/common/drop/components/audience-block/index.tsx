import {
  ImageContainer
} from './styled-components'
import { FC } from 'react'
import TProps from './types'

import {
  AudienceTwitchIcon,
  AudienceXIcon
} from '@/components/icons'

const Component: FC<TProps> = ({
  drop
}) => {
  return <ImageContainer>
    <AudienceXIcon />
  </ImageContainer>
}

export default Component