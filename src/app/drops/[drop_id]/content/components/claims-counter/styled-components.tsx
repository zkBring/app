import styled from 'styled-components'
import {
  Widget,
  Link,
  DashedProgressBar
} from '@/components/common'

export const WidgetStyled = styled(Widget)`
  margin-bottom: 50px;
`

export const Label = styled.h3`
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1;
  margin-bottom: 15px;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 13px;
  }
`

export const LabelValue = styled.span`
  color: ${props => props.theme.secondaryTextColor};

`

export const DashedProgressBarStyled = styled(DashedProgressBar)``

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.secondaryTextColor};
  display: flex;
  gap: 10px;
  align-items: center;
`