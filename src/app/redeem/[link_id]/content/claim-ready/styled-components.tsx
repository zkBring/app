import styled from "styled-components"
import {
  Title,
  Subtitle
} from '@/components/common'

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const TitleStyled = styled(Title)`
  margin: 0 0 16px;
`

export const SubtitleStyled = styled(Subtitle)`
  margin: 0 0 30px;
`