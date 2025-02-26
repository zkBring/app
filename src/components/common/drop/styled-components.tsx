import { styled } from "styled-components"
import Link from 'next/link'


export const Container = styled.div`
  border: 1px solid ${props => props.theme.primaryBorderColor};
  border-radius: 20px;
  padding: 10px;
  background: ${props => props.theme.secondaryBackgroundColor};
`

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const LinkStyled = styled(Link)`

`