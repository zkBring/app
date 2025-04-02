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
import TProps from './types'



const NoDrops: FC<TProps> = ({
  address
}) => {

  const launchDropButton = <ButtonStyled
    appearance='action'
    to={address ? '/launch/audience' : '/auth'}
  >
    Launch drop
  </ButtonStyled>

  return <Container>
    <PixeledDropIconStyled />
    <TitleStyled>
      No drops yet
    </TitleStyled>
    <Text>
    Your drops will be displayed here. Launch the first one – It’s easy!
    </Text>
    {launchDropButton}
  </Container>
}

export default NoDrops