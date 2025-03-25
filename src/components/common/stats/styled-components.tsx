import { Widget } from "@/components/common"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
`

export const Subtitle = styled.h3`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.1px;
  color: ${props => props.theme.secondaryTextColor};
  margin: 0 0 10px;
`

export const Value = styled.p`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  color: ${props => props.theme.primaryTextColor};
  margin: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`

export const Limit = styled.span`
  color: ${props => props.theme.secondaryTextColor};
`

export const WidgetComponent = styled(Widget)`
  padding: 15px 20px;
  border-radius: 10px;
`