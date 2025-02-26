import styled from 'styled-components'

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 50px 0 ;
  font-size: 14px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    padding: 20px;
  }
`