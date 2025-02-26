import styled from "styled-components"
import {
  Text,
  Subtitle
} from '@/components/common'

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TextStyled = styled(Text)`
  margin-bottom: 40px;
`


export const SubtitleStyled = styled(Subtitle)`
  margin-bottom: 40px;
`