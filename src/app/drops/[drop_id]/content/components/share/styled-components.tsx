import styled from 'styled-components'
import {
  XIcon,
  WarpcastIcon
} from '@/components/icons'

export const Container = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  margin: 0 auto 40px;
  justify-content: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-bottom: 40px;
  }
`

export const ShareItem = styled.a`
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
`

export const XIconStyled = styled(XIcon)`
  max-width: 18px;
`

export const WarpcastIconStyled = styled(WarpcastIcon)`
  max-width: 18px;
`