import styled, { css } from 'styled-components'
import {
  ConnectWallet
  // @ts-ignore
} from 'zkbring-onchainkit/wallet'
import TProps from './types'

export const ButtonContainer = styled.div`
  width: fit-content;
  position: relative;
`

export const DisabledOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
`

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
  width: fit-content;
  background-color: ${(props) =>
    props.theme && props.theme.buttonActionBackgroundColor};
  color: ${(props) => props.theme && props.theme.additionalTextColor};
  box-sizing: border-box;
  min-width: auto;

  &:hover {
    background-color: ${(props) =>
      props.theme && props.theme.buttonActionBackgroundHoverColor};
  }

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

  ${props => props.appearance === 'default' && css`
    background-color: ${(props) => props.theme && props.theme.buttonDefaultBackgroundColor};
    border: 1px solid ${(props) => props.theme && props.theme.buttonDefaultBorderColor};

    span {
      color: ${(props) => props.theme && props.theme.secondaryTextColor};
    }

    &:hover {
      background-color: ${(props) =>
        props.theme && props.theme.buttonDefaultBackgroundHoverColor};
    }
  `}


  ${props => props.disabled &&
    css`
      background-color: ${(props) =>
        props.theme && props.theme.buttonDisabledBackgroundColor};
      color: ${(props) => props.theme && props.theme.additionalTextColor};
      cursor: not-allowed;
      opacity: .3;

      &:hover {
        background-color: ${(props) =>
          props.theme && props.theme.buttonDisabledBackgroundColor};
      }
    `}

`