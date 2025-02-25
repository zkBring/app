'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
  SubtitleStyled,
} from './styled-components'
import ErrorExpiredImage from '@/images/error-expired.png'

const ErrorLinkExpiredScreen: FC = () => {
  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Link Expired'
      src={ErrorExpiredImage}
    />
    <TitleStyled>Link has expired</TitleStyled>
    <SubtitleStyled>This claim is not available anymore</SubtitleStyled>
  </Container>
}

export default ErrorLinkExpiredScreen
