import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  max-width: 100px;
  height: 3px;
  border-radius: 2px;
  background: ${props => props.theme.blankColor};
`

export const Bar = styled.div`
  position: absolute;
  top: 0;
  background: ${props => props.theme.primaryTextColor};
  left: 0;
  border-radius: 2px;
  height: 100%;
`
