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
} from '../../styled-components'

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


const Content: FC<TProps> = ({
  drop
}) => {

  useEffect(() => {

  }, [])
  console.log({
    drop
  })
  return <ThemeProvider theme={dark}>
    <Header />
    <Container>
      {drop.title}
    </Container>
    <Footer />/ 
  </ThemeProvider>
}


export default Content
