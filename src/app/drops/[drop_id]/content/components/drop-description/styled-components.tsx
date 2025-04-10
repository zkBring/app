import styled from 'styled-components'

import Image  from 'next/image'
import { 
  Title
} from '@/components/common'
export const Container = styled.div`
  margin-bottom: 35px;
`

export const TitleStyled =   styled(Title)`

`

export const Description = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: ${props => props.theme.secondaryTextColor};
`

export const ShowMore = styled.span`
  color: ${props => props.theme.primaryTextColor};
  cursor: pointer;
`

export const ImageStyled = styled(Image)`
  border-radius: 18px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0 auto 20px;
`