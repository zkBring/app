import {
  Claimed,
  ClaimedText,
  Container,
  Creator,
  CreatorImage,
  DashedProgressBarStyled
} from './styled-components'
import TProps from './types'
import {
  InputCoinIcon
} from '@/components/icons'
import CreatorImageSrc from '@/images/creator-image.png'

import { FC } from 'react'

const DropData: FC<TProps> = ({
  drop
}) => {
  return <Container>
    <Creator>
      <CreatorImage
        src={CreatorImageSrc}
        width={20}
        height={20}
        alt='Creator image'
      />
      06X8e...f4b47
    </Creator>
    <Claimed>
      <InputCoinIcon />
      <ClaimedText>
        2% claimed
      </ClaimedText>
      <DashedProgressBarStyled
        current={10}
        max={100}
        dashCount={5}
      />
    </Claimed>
  </Container>
}
export default DropData