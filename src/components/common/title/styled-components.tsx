import styled from 'styled-components'

export const TitleComponent = styled.h1`
  font-family: 'FK Roman';
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 99px;
  text-align: center;
  color: ${props => props.theme.primaryTextColor};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 50px;
    line-height: 60px;
  }
`