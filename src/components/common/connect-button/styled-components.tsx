import styled, { css } from 'styled-components'
import {
  ConnectWallet
  // @ts-ignore
} from 'zkbring-onchainkit/wallet'
import TProps from './types'

export const ConnectWalletStyled = styled(ConnectWallet)<TProps>`
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


  ${props => props.size === 'default' && css`
    padding: 14px 30px;
    font-size: 16px;
    height: 48px;
    border-radius: 12px;
  `}

  ${props => props.size === 'small' && css`
    padding: 4px 8px;
    height: 28px;
    font-size: 14px;
    border-radius: 8px;
  `}


  &:hover {
    background-color: ${(props) =>
      props.theme && props.theme.buttonActionBackgroundHoverColor};
  }

  @media (max-width: 600px) {
    display: none;
  }
`