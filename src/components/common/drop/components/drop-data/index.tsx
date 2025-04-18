import {
  Claimed,
  ClaimedText,
  Container,
  Creator,
  CreatorImage,
  DashedProgressBarStyled,
  InputCoinIconStyled
} from './styled-components'
import TProps from './types'
import {
  shortenString
} from '@/utils'

import CreatorImageSrc from '@/images/creator-image.png'

import { FC } from 'react'

const DropData: FC<TProps> = ({
  drop
}) => {

  const claimedPercentage = Number((drop.claimsCount * BigInt(100)) / drop.maxClaims)
  return <Container>
    <Creator>
      <CreatorImage
        src={CreatorImageSrc}
        width={20}
        height={20}
        alt='Creator image'
      />
      {shortenString(drop.creatorAddress)}
    </Creator>
    <Claimed>
      <InputCoinIconStyled />
      <ClaimedText>
        {claimedPercentage}% claimed
      </ClaimedText>
      <DashedProgressBarStyled
        current={claimedPercentage}
        max={100}
        dashCount={5}
      />
    </Claimed>
  </Container>
}
export default DropData