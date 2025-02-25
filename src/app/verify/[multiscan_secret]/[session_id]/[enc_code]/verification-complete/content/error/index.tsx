'use client'

import { FC } from 'react'
import {
  Container,
  Content,
  ButtonStyled
} from './styled-components'
import { Subtitle } from '@/components/common' 
import TProps from './types'
import { ErrorIcon } from '@/components/icons'
import { TDispenserError } from '@/types'

const defineButton = (
  error: TDispenserError | null
) => {
  if (error === 'qr_proof_verification_failed' ||  'qr_already_claimed') {
    return <ButtonStyled onClick={() => {
      window.open('https://x.com/zkbring', '_blank')
    }}>
      Contact support
    </ButtonStyled>
  }

  return <ButtonStyled onClick={() => {
    window.location.reload()
  }}>
    Retry
  </ButtonStyled>
}

const ErrorScreen: FC<TProps> = ({
  errorText,
  error,
}) => {

  const button = defineButton(
    error
  )

  return <Container>
    <Content>
      <ErrorIcon />
      <Subtitle>{errorText || 'Some error occured'}</Subtitle>
    </Content>
    {button}
  </Container>
}

export default ErrorScreen