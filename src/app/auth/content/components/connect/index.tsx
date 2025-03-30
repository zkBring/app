'use client'
import {
  FC
} from 'react'
import {
  ConnectButton
} from '@/components/common'
import {
  TitleStyled,
  TextStyled,
  ImageStyled,
  Container
} from '../../styled-components'
import Image from '@/images/connect-image.png'


const Connect: FC = () => {
  return <Container>
    <ImageStyled
      src={Image}
      width={153}
      height={117}
      alt='Connection image'
    />
    <TitleStyled>Connect wallet</TitleStyled>
    <TextStyled>Enable zkBring to view your address and suggest transactions for approval</TextStyled>
    <ConnectButton />
  </Container>
}

export default Connect
