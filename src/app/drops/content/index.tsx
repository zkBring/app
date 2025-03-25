'use client'

import {
  Container,
  Controls
} from '../styled-components'

import Search from './search'
import DropsList from './drops-list'
import {
  Page
} from '@/components/common'
import { useEffect, FC } from 'react'
import TProps from './types'
import { drops as dropsApi } from '@/app/api'
import { useAppSelector } from '@/lib/hooks'
import {
  Button
} from '@/components/common'

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

  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  return <Page>
    <Container>
      <Controls>
        <Search
          onChange={async (value) => {
            getData(value)
          }}
        />
        {address && <Button to='/launch/audience' appearance='action'>
          Launch
        </Button>}
      </Controls>
      

      <DropsList
        drops={drops}
      />

    </Container>
  </Page>
}


export default Content
