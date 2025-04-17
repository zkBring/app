import { styled } from "styled-components"
import {
  Dialog,
  Text,
  Widget,
  IconedList,
  Button,
  SmallText,
  Link
} from "@/components/common"


export const DialogStyled = styled(Dialog)`
  max-width: 600px;
`

export const Content = styled.div`

`

export const TextStyled = styled(Text)`
  text-align: center;
  margin-bottom: 30px;
  font-size: 15px;
`

export const WidgetStyled = styled(Widget)`
  text-align: left;
  padding: 30px 40px;
  margin-bottom: 30px;
`

export const IconedListStyled = styled(IconedList)`
`

export const ButtonStyled = styled(Button)`

`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;

  button {
    width: 100%;
  }
`

export const SmallTextStyled = styled(SmallText)`
  margin-bottom: 30px;
  text-align: center;
  color: ${props => props.theme.secondaryTextColor};
`

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.primaryTextColor};
`

export const CanvasStyled = styled.canvas`
  width: 100px;
  height: 100px;
  display: block;
`