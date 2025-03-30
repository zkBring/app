import styled from 'styled-components'

import Image  from 'next/image'

export const Container = styled.div`
  margin-bottom: 35px;
`

export const Title =   styled.h1`
  font-family: 'FK Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 99px;
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
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