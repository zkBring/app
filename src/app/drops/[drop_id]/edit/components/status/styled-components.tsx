import styled from "styled-components"
import {
  Widget,
  SmallSubtitle
} from '@/components/common'

export const Text = styled.p`
  margin: 0 0 10px;
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.theme.dropStatusTextColor};
`

export const WidgetStyled = styled(Widget)`
  margin-bottom: 20px;

`

export const SmallSubtitleStyled = styled(SmallSubtitle)`
  text-align: left;
`