import styled from 'styled-components'

export const TextComponent = styled.p`
  margin: 0 0 40px;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.primaryTextColor}
`