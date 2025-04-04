'use client'

import {
  Container
} from '../styled-components'
import {
  TDrop
} from '@/types'
import DropsList from './drops-list'
import NoDrops from './no-drops'
import DropsPagination from './drops-pagination'

import {
  Page
} from '@/components/common'
import { FC } from 'react'
import TProps from './types'
import { useAppSelector } from '@/lib/hooks'
import {
  TitleStyled,
  Subtitle
} from './styled-components'

const defineContent = (
  drops: (TDrop | null)[],
  address: null | string
) => {

  const dropsFiltered = drops.filter(drop => drop) // all nulls filtered, so only real drops left
  if (dropsFiltered.length === 0) {
    return <NoDrops address={address} />
  }

  return <Container>
    <TitleStyled>
      Verify your data with zkTLS and claim crypto
    </TitleStyled>
    <Subtitle>
      Explore drops. Prove your activity. Claim tokens.
    </Subtitle>
  
    <DropsList
      drops={dropsFiltered}
    />
  </Container>
}

const Content: FC<TProps> = ({
  drops,
  resultSet,
  includePageComponent
}) => {
  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  const content = defineContent(drops, address)

  if (includePageComponent) {
    return <Page>
      {content}
      <DropsPagination resultSet={resultSet} baseUrl='/drops' />
    </Page>
  }

  return <>
    {content}
    <DropsPagination resultSet={resultSet} baseUrl='/drops/own' />
  </>

}


export default Content
