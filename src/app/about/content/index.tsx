'use client'

import {
  Container,
  TitleStyled
} from './styled-components'

import {
  Page
} from '@/components/common'
import { useEffect, FC } from 'react'

const Content: FC = () => {


  return <Page>
    <Container>
      <TitleStyled>About</TitleStyled>
    </Container>
  </Page>
}


export default Content
