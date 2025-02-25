import { styled } from "styled-components"
import {
  Title,
  Subtitle,
  Loader
} from '@/components/common'

export const TitleStyled = styled(Title)`
  text-align: center;
  margin: 0 0 12px;
`

export const SubtitleStyled = styled(Subtitle)`
  margin: 0 0 32px;
  color: ${props => props.theme.primaryTextColor}
`

export const LoaderStyled = styled(Loader)`
`

export const Done = styled.div`
  background-color: ${props => props.theme.highlightColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
`

export const LoaderContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 32px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`