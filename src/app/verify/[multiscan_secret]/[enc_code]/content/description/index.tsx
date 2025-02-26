
import {
  ArrowsIcon,
  ReclaimIcon,
  XIcon
} from '@/components/icons'
import { FC } from 'react'
import {
  Container,
  VerificationLogo,
  VerificationLogos,
  TextStyled
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
      <ArrowsIcon />
      <VerificationLogo>
        <XIcon />
      </VerificationLogo>
    </VerificationLogos>
    <TextStyled>
      We use Reclaim Protocol to securely verify account ownership without sharing sensitive data. 
    </TextStyled>
    <TextStyled>
      Your device generates a mathematical proof locally using zkTLS webproof, ensuring complete privacy.
    </TextStyled>
    <Buttons>
      <ButtonStyled
        appearance='action'  
        onClick={() => {
          if (mobile()) {
            window.location.href = verificationUrl

            return 
          }
          setScreen('qr-code')
        }
      }>
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