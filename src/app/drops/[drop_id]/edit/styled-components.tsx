import { styled } from "styled-components"
import {
  Stats,
  Widget,
  Button
} from '@/components/common'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 300px;
  align-items: start;
`


export const Aside = styled.aside`
`

export const StatsStyled = styled(Stats)`
  margin-bottom: 20px;
`

export const Content = styled.div``

export const WidgetStyled = styled(Widget)`
  margin-bottom: 20px;
`

export const AsideButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

`

export const ButtonStyled = styled(Button)`
  width: 100%;
`