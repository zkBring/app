import styled from "styled-components"
import Link from 'next/link'


export const LinkExternal = styled.a`
  color: ${props => props.theme.primaryTextColor};
  font-size: 14px;
  text-decoration: none;
`


export const LinkInternal = styled(Link)`
  color: ${props => props.theme.primaryTextColor};
  font-size: 14px;
  text-decoration: underline;
`