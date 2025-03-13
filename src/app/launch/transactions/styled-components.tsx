import styled from 'styled-components'
import {
  Button,
  Stages
} from 'components/common'

export const ButtonStyled = styled(Button)`
  width: 100%;
`

export const StagesStyled = styled(Stages)`
  padding-bottom: 30px;
  margin-bottom: 30px;

  border-bottom: 1px solid ${props => props.theme.primaryBorderColor};
`