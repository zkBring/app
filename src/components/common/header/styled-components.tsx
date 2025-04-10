import styled from "styled-components"
import { TAccount } from './types'
import Link from '../link'

export const Header = styled.header<TAccount>`
  position: relative;
  width: 100%;
  align-items: center;
  min-height: 43px;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  margin-bottom: 50px;


  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    min-height: 30px;
    padding: 14px;
    margin-bottom: 20px;
  }
`

export const LogoLink = styled(Link)`
  justify-self: start;
`