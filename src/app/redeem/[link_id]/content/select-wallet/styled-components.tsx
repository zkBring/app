import styled from "styled-components"
import {
  Title,
  Subtitle,
  Button
} from '@/components/common'
import Image from 'next/image'

export const Container = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const TitleStyled = styled(Title)`
  margin: 0 0 16px;
`

export const ImageStyled = styled(Image)`
  margin-bottom: 24px;
`

export const SubtitleStyled = styled(Subtitle)`
  margin-bottom: 24px;
`

export const ButtonStyled = styled(Button)`
  margin-bottom: 2px;
`