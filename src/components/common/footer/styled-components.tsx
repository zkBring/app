import { styled } from "styled-components"
import {
  Link
} from '@/components/common'

export const Footer = styled.footer`
  display: flex;
  padding: 20px 30px;
  color: ${props => props.theme.primaryTextColor};
`

export const FooterContent = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    gap: 20px;
  }
`

export const FooterSocial = styled.div`
  display: flex;
  margin-left: auto;
  gap: 40px;
  align-items: center;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

export const FooterVersion = styled.span`
  font-size: 12px;
  color: ${props => props.theme.secondaryTextColor};
`

export const LinkStyled = styled(Link)`
  font-size: 12px;
  color: ${props => props.theme.primaryTextColor};
`

