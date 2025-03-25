'use client'

import {
  FC,
} from 'react'
import {
  Container,
  Title,
  LinkStyled
} from './styled-components'

import { TDrop } from './types'

const Drop: FC<TDrop> = ({
  title,
  address
}) => {
  return <LinkStyled href={`/drops/${address}`}>
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  </LinkStyled>
}

export default Drop
