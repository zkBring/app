'use client'
import {
  FC
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  ButtonStyled,
  Container
} from './styled-components'
import {
  StepTitle
} from '../../styled-components'
import TProps from './types'

const Claim: FC<TProps> = ({
  symbol,
  amount,
  disabled
}) => {
  return <Container disabled={disabled}>
    <StepTitle>
      2. Claim drop
    </StepTitle>
    <WidgetStyled
      title={`${amount} ${symbol}`}
    >
      <TextStyled>
        You’re eligible! Claim your tokens now!
      </TextStyled>
      <ButtonStyled
        appearance='additional'
        size='extra-small'
        disabled={disabled}
      >
        Claim
      </ButtonStyled>
    </WidgetStyled>
  </Container>
}

export default Claim