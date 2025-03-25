import styled from 'styled-components'
import { TProps } from './types'

export const WidgetComponent = styled.div<TProps>`
  background-color: ${props => props.theme.widgetBackgroundColor};
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.widgetBorderColor};
`

export const WidgetTitle = styled.h3`
  font-size: 25px;
  margin: 0 0 20px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-weight: 700;
`

export const WidgetContent = styled.div`
  width: 100%;
`
