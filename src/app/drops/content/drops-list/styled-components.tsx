import { styled } from "styled-components"


export const Drops = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`

