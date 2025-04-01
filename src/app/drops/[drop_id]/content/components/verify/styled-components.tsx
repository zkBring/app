import styled, { css } from 'styled-components'
import {
  Widget,
  Text,
  Button,
  SmallText,
  Link
} from '@/components/common'
import {
  LockIcon,
  XIcon
} from '@/components/icons'


export const WidgetStyled = styled(Widget)`

`

export const TextStyled = styled(Text)`
  margin-bottom: 22px;
`

export const ButtonStyled = styled(Button)`
  width: fit-content;
  margin-bottom: 25px;
`


export const Container = styled.div<{
  disabled: boolean
}>`
  margin-bottom: 50px;
  ${props => props.disabled && css`
    opacity: 80%;
  `}
`

export const SmallTextStyled = styled(SmallText)`
  display: flex;
  align-items: center;
`

export const LinkStyled = styled(Link)`
  margin-left: 2px;
  display: inline-block;
`

export const LockIconStyled = styled(LockIcon)`
  margin-right: 5px;
`

export const XIconStyled = styled(XIcon)`
  max-width: 16px;
  height: auto;
`