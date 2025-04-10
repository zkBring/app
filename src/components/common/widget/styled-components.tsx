import styled, { css } from 'styled-components'
import { TProps } from './types'
import Image from 'next/image'

export const WidgetComponent = styled.div<TProps>`
  background-color: ${props => props.theme.widgetBackgroundColor};
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.widgetBorderColor};
`

export const WidgetTitle = styled.h3`
  font-size: 25px;
  margin: 0;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 18px;
    line-height: 24px;
  }
`

export const WidgetContent = styled.div<{ title?: string }>`
  width: 100%;
  ${props => props.title && css`
    margin-top: 20px;
  `}
`

export const FinishedIndicator = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  font-size: 18px;
  border: 1px solid ${props => props.theme.successBorderColor};
  background: ${props => props.theme.successBackgroundColor};
  color: ${props => props.theme.successTextColor};
  margin-left: auto;
`

export const WidgetTitleImageContainer = styled.div`
  min-width: 38px;
  height: 38px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 1px solid ${props => props.theme.dropItemBorderColor};
  background-color: ${props => props.theme.blankColor};

  svg {
    max-width: 16px;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    min-width: 28px;
    height: 28px;
  }
`


export const WidgetTitleImage = styled(Image)`
  display: block;
  object-fit: cover;
  object-position: center;
`