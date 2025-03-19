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

const Verify: FC<TProps> = ({
  onStart
}) => {
  return <Container>
    <StepTitle>
      1. Verify Eligibility
    </StepTitle>
    <WidgetStyled
      title='Users who follow @zkBring'
    >
      <TextStyled>
        We use zkPass with zkTLS Webproof technology to verify your eligibility without accessing your credentials or personal data.
      </TextStyled>
      <ButtonStyled
        appearance='action'
        size='extra-small'
        onClick={onStart}
      >
        Verify with zkTLS
      </ButtonStyled>
    </WidgetStyled>
  </Container>
}

export default Verify