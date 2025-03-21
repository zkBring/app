'use server'
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
  headers
} from 'next/headers'
import {
  TTokenStandard,
  TTokenData,
  TWalletName
} from '@/types'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'
import { drops as dropsApi } from '../api'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `All drops`
  })
}

const getInitialData = cache(async () => {
  try {
    const drops = await dropsApi.getAll()
    return drops.data.campaigns_array
  } catch (err: unknown) {
    console.log({
      err
    })
  }
})

export default async function Drops() {
  const data = await getInitialData()
  if (!data) {
    return <h1>No data to show</h1>
  }

  return <Content drops={data} />
}

