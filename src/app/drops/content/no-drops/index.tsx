import { FC } from 'react'
import {
  TitleStyled,
  Text,
  ButtonStyled,
  PixeledDropIconStyled
} from './styled-components'

import {
  Container
} from '../../styled-components'

const NoDrops = () => {
  return <Container>
    <PixeledDropIconStyled />
    <TitleStyled>
      No drops yet
    </TitleStyled>
    <Text>
    Your drops will be displayed here. Launch the first one – It’s easy!
    </Text>
    <ButtonStyled to='/launch/audience' appearance='action'>
      Launch
    </ButtonStyled>
  </Container>
}

export default NoDrops