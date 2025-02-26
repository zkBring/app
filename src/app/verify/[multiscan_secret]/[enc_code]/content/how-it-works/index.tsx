import { FC } from 'react'
import {
  Container,
  TextStyled,
  SubtitleStyled
} from './styled-components'
import {
  List
} from '@/components/common'
import { ButtonStyled } from '../styled-components'
import TProps from './types'

const HowItWorks: FC<TProps> = ({
  setScreen
}) => {
  return <Container>
    <SubtitleStyled>
      How it works
    </SubtitleStyled>
    <TextStyled>
      Your data stays private throughout the entire process. The proof only shows you meet the requirements, without exposing any sensitive information. All happening locally, keeping your data protected:
    </TextStyled>

    <List
      items={[
        'Verify your Instagram account',
        'Your device creates a private webproof',
        'Claim tokens to your Coinbase Wallet'
      ]}
    />
    <ButtonStyled onClick={() => {
      setScreen('description')
    }}>
      Back
    </ButtonStyled>    
  </Container>
}

export default HowItWorks