'use client'

import {
  Container
} from '../styled-components'

import Search from './search'
import DropsList from './drops-list'
import {
  Page
} from '@/components/common'
import { useEffect, FC } from 'react'
import TProps from './types'
import { drops as dropsApi } from '@/app/api'

const getData = async (
  query: string
) => {
  try {
    const drops = await dropsApi.getAll(
      query
    )
    return drops.data.campaigns_array
  } catch (err: unknown) {
    console.log({
      err
    })
  }
}

const Content: FC<TProps> = ({
  drops
}) => {

  useEffect(() => {

  }, [])

  return <Page>
    <Container>
      <Search
        onChange={async (value) => {
          getData(value)
        }}
      />

      <DropsList
        drops={drops}
      />

    </Container>
  </Page>
}


export default Content
