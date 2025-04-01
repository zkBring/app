'use client'

import {
  Container
} from '../styled-components'
import {
  TDrop
} from '@/types'
import DropsList from './drops-list'
import NoDrops from './no-drops'

import {
  Page
} from '@/components/common'
import { FC } from 'react'
import TProps from './types'
import { useAppSelector } from '@/lib/hooks'
import {
  Button
} from '@/components/common'
import {
  TitleStyled,
  Subtitle
} from './styled-components'

const defineContent = (
  drops: (TDrop | null)[]
) => {
  if (drops.length === 0) {
    return <NoDrops />
  }

  return <Container>
    <TitleStyled>
      Verify your data with zkTLS and claim crypto
    </TitleStyled>
    <Subtitle>
      Explore drops. Prove your activity. Claim tokens.
    </Subtitle>
  
    <DropsList
      drops={drops}
    />
  </Container>
}

const Content: FC<TProps> = ({
  drops
}) => {
  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  const content = defineContent(drops)

  return <Page>
    {content}
  </Page>
}


export default Content
