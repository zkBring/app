import styled from "styled-components"
import {
  Widget
} from '@/components/common'

export const Text = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.theme.dropStatusTextColor};
`

export const WidgetStyled = styled(Widget)`
  margin-bottom: 20px;
`