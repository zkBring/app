
import styled, { css } from 'styled-components'
import {
  TAccount
} from '../types'
import {
  ConnectWallet
  // @ts-ignore
} from '@coinbase/onchainkit/wallet'

export const Account = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.primaryTextColor};
  font-size: 14px;
`

export const Address = styled.div<TAccount>`
  color: ${props => props.theme.primaryTextColor};
  display: flex;
  gap: 3px;
  align-items: center;
  color: ${props => props.theme.secondaryTextColor};
`

export const Profile = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: end;
  font-size: 12px;
  margin-left: auto;
  color: ${props => props.theme.primaryTextColor};
`

export const Logout = styled.div`
  cursor: pointer;
  transition: all .3s;
  height: auto;
  &:hover {
    ${props => {
      return css`
        border-color: transparent;
        background-color: ${props.theme.tagDefaultColor};
      `
    }};
  }
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

  padding: 12px 24px;
  height: 40px;
  font-size: 12px;
  border-radius: 12px;
`