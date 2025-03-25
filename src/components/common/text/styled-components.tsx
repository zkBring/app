import styled from 'styled-components'

export const TextComponent = styled.p`
  font-size: 13px;
  line-height: 22px;
  margin: 0;
  color: ${props => props.theme.secondaryTextColor}
`