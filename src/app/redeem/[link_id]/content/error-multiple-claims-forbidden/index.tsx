'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
  SubtitleStyled,
} from './styled-components'
import ErrorQRImage from '@/images/error.png'

const ErrorMultipleClaimsForbidden: FC = () => {
  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Error Forbidden'
      src={ErrorQRImage}
    />
    <TitleStyled>You have already claimed a link</TitleStyled>
    <SubtitleStyled>If you believe this is an error or have any questions, please contact the organization that shared this link with you.</SubtitleStyled>
  </Container>
}

export default ErrorMultipleClaimsForbidden
