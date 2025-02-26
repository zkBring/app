'use client'
import {
  LinkdropSDK,
  NotFoundError,
  ForbiddenError,
  ValidationError,
  ConflictError,
  ClaimLink
} from 'linkdrop-sdk'
import randomBytes from 'randombytes'
import { sdkApiKey } from '@/app/configs/index'
import {
  getTokenERC20Data,
  getTokenERC721Data,
  getTokenERC1155Data,
  generateMetadataUtil
} from '@/utils'

import {
  Container
} from '../styled-components'

import Search from './search'
import DropsList from './drops-list'

import type { Metadata } from 'next'
import { ThemeProvider } from 'styled-components'
import { dark } from '@/themes'
import {
  Header,
  Footer
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

  return <ThemeProvider theme={dark}>
    <Header />
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
    <Footer />
  </ThemeProvider>
}


export default Content
