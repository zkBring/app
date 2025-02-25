'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
  SubtitleStyled,
} from './styled-components'
import ErrorQRImage from '@/images/qr-error.png'

const ErrorNotMappedScreen: FC = () => {
  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Error 404'
      src={ErrorQRImage}
    />
    <TitleStyled>QR not mapped</TitleStyled>
    <SubtitleStyled>Please contact the company that provided you the QR code</SubtitleStyled>
  </Container>
}

export default ErrorNotMappedScreen
