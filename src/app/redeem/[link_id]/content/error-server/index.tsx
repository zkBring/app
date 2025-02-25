'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
  SubtitleStyled,
} from './styled-components'
import ErrorQRImage from '@/images/error.png'
import TProps from './types'

const ErrorServerScreen: FC<TProps> = ({
  title
}) => {
  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Error Server'
      src={ErrorQRImage}
    />
    <TitleStyled>{title || 'Server error occured'}</TitleStyled>
    <SubtitleStyled>Please contact the company that provided you the link</SubtitleStyled>
  </Container>
}

export default ErrorServerScreen
