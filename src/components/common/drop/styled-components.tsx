import { styled } from "styled-components"
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`
  border: 1px solid ${props => props.theme.widgetBorderColor};
  border-radius: 10px;
  padding: 15px;
  background: ${props => props.theme.widgetBackgroundColor};
  display: grid;
  gap: 23px;
  grid-template-columns: 100px 1fr;

`

export const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 24px;
  line-height: 26px;
`

export const ImageStyled = styled(Image)`
`

export const ImageContainer = styled.div`
  border-radius: 7px;
  background-color: ${props => props.theme.dropItemBackgroundColor};
  border: 1px solid ${props => props.theme.dropItemBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`

export const LinkStyled = styled(Link)`

`

export const Content = styled.div`

`

export const AudienceUsers = styled.p`
  color: ${props => props.theme.primaryTextColor};
  font-size: 13px;
  line-height: 26px;
  margin-bottom: 11px;
`