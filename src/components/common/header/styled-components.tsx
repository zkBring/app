import styled, {
  keyframes,
  css
} from "styled-components"
import { TAccount } from './types'

const backgroundAnimation = keyframes`
  0% { background-position: left top; }
  50% { background-position: right bottom; }
  100% { background-position: left top; }
`

export const Header = styled.header<TAccount>`
  position: relative;
  width: 100%;
  align-items: center;
  min-height: 43px;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  margin-bottom: 50px;
`

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