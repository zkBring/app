import styled from 'styled-components'

export const TitleComponent = styled.h1`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  margin: 0;
  color: ${props => props.theme.primaryTextColor}
`