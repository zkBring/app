import { styled } from "styled-components"

export const Main = styled.main`
  margin: 0 auto 40px;
  max-width: 1024px;
  padding: 20px;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 0 20px 20px;
  }
`