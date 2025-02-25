'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
  SubtitleStyled,
} from './styled-components'
import ErrorQRImage from '@/images/qr-error.png'

const ErrorQRSecretMissedScreen: FC = () => {
  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Error 400'
      src={ErrorQRImage}
    />
    <TitleStyled>QR secret key not found as hash param in the URL</TitleStyled>
    <SubtitleStyled>Please contact the company that provided you the QR code</SubtitleStyled>
  </Container>
}

export default ErrorQRSecretMissedScreen
