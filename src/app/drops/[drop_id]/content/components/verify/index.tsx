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

const Verify: FC = () => {
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
      >
        Verify with zkTLS
      </ButtonStyled>
    </WidgetStyled>
  </Container>
}

export default Verify