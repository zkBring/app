import styled from "styled-components"
import {
  Title,
  Subtitle,
  Button
} from '@/components/common'
import Image from 'next/image'

import {
  ConnectWallet
  // @ts-ignore
} from '@coinbase/onchainkit/wallet'

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const TitleStyled = styled(Title)`
  margin: 0 0 16px;
`

export const ImageStyled = styled(Image)`
  margin-bottom: 24px;
`

export const SubtitleStyled = styled(Subtitle)`
  margin-bottom: 24px;
`


export const ConnectWalletStyled = styled(ConnectWallet)`
  cursor: pointer;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  justify-content: center;
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  border: none;
  background-color: ${(props) =>
    props.theme && props.theme.buttonActionBackgroundColor};
  color: ${(props) => props.theme && props.theme.additionalTextColor};
  box-sizing: border-box;

  padding: 14px 30px;
  font-size: 16px;
  height: 48px;
  border-radius: 12px;
`