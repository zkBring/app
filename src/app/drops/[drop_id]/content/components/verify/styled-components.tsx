import styled, { css } from 'styled-components'
import {
  Widget,
  Text,
  Button
} from '@/components/common'

export const WidgetStyled = styled(Widget)`

`

export const TextStyled = styled(Text)`
  margin-bottom: 22px;
`

export const ButtonStyled = styled(Button)`
  width: fit-content;
`


export const Container = styled.div<{
  disabled: boolean
}>`
  margin-bottom: 50px;
  ${props => props.disabled && css`
    opacity: 80%;
  `}
`