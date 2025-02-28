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
  campaignId
}) => {
  return <LinkStyled href={`/drops/${campaignId}`}>
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  </LinkStyled>
}

export default Drop
