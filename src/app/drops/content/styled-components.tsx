import styled from 'styled-components'
import {
  Title
} from '@/components/common'

export const TitleStyled = styled(Title)`
  margin: 0 0 20px;
`

export const Subtitle = styled.p`
  color: ${props => props.theme.primaryTextColor};
  font-size: 15px;
  margin: 0 0 60px;
  text-align: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin: 0 0 30px;
  }
`