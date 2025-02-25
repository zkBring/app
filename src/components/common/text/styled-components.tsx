import styled from 'styled-components'

export const TextComponent = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  margin: 0;
  color: ${props => props.theme.primaryTextColor}
`