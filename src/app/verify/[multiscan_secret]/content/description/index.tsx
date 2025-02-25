import {
  Text
} from '@/components/common'
import {
  ReclaimIcon,
  XIcon
} from '@/components/icons'
import { FC } from 'react'
import {
  Container,
  VerificationLogo,
  VerificationLogos,
  VerificationLogoArrows
} from './styled-components'
import TProps from './types'
import mobile from 'is-mobile'

import { Buttons, ButtonStyled } from '../styled-components'

const Description: FC<TProps> = ({
  setScreen,
  verificationUrl
}) => {
  return <Container>
    <VerificationLogos>
      <VerificationLogo>
        <ReclaimIcon />
      </VerificationLogo>
      <VerificationLogo>
        <XIcon />
      </VerificationLogo>
    </VerificationLogos>
    <Text>
      We use Reclaim Protocol to securely verify account ownership without sharing sensitive data. 
    </Text>
    <Text>
      Your device generates a mathematical proof locally using zkTLS webproof, ensuring complete privacy.
    </Text>
    <Buttons>
      <ButtonStyled onClick={() => {
        if (mobile()) {
          window.location.href = verificationUrl

          return 
        }
        setScreen('qr-code')
      }}>
        Get started
      </ButtonStyled>

      <ButtonStyled onClick={() => {
        setScreen('how_it_works')
      }}>
        How does it work?
      </ButtonStyled>
    </Buttons>
  </Container>
}

export default Description