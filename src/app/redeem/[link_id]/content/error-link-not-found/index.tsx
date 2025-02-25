'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
  SubtitleStyled,
} from './styled-components'
import Error404Image from '@/images/error-404.png'

const ErrorNotFoundScreen: FC = () => {
  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Error 404'
      src={Error404Image}
    />
    <TitleStyled>Asset does not exist</TitleStyled>
    <SubtitleStyled>Please contact the company that provided you the short code</SubtitleStyled>
  </Container>
}

export default ErrorNotFoundScreen
