import styled from 'styled-components'
import {
  Title,
  Button
} from '@/components/common'
import {
  PixeledDropIcon
} from '@/components/icons'

export const TitleStyled = styled(Title)`
  font-size: 50px;
  line-height: 120%;
  margin: 0 0 20px;
`

export const Text = styled.p`
  font-size: 16px;
  margin: 0 auto 30px;
  text-align: center;
  max-width: 300px;
`

export const ButtonStyled = styled(Button)`
  display: block;
  margin: 0 auto;
`

export const PixeledDropIconStyled = styled(PixeledDropIcon)`
  margin: 0 auto 20px;
`