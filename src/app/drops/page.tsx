'use server'
import {
  generateMetadataUtil,
  createSDK,
} from '@/utils'
import type { Metadata } from 'next'
import { cache } from 'react'
import { dropsAmountPerPage } from '@/app/configs'
import Content from './content'
import {
  TDropsSearchParams
} from '@/types'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `All drops`
  })
}

const defaultLimit = String(dropsAmountPerPage)

const getInitialData = cache(async ({
  offset = '0',
  limit = defaultLimit 
}: {
  offset?: string,
  limit?: string
}) => {
  try {

    const sdk = createSDK({})
    const dropsData = await sdk.getDrops({
      offset: Number(offset),
      limit: Number(limit),
      staked: true,
      status: 'active'
    })

    return {
      drops: dropsData.drops,
      resultSet: { ...dropsData.resultSet, limit: Number(limit) }
    }
  } catch (err: unknown) {
    console.log({
      err1: err
    })
  }
})

export default async function Drops({
  searchParams,
}: {
  searchParams: Promise<TDropsSearchParams>
}) {

  const {
    offset,
    limit
  } = (await searchParams)

  const data = await getInitialData({
    offset,
    limit
  })

  if (!data) {
    return <h1>Not found</h1>
  }

  const { drops, resultSet } = data
  const dropsData = drops.map(drop => {
    return {
      title: drop.title,
      address: drop.address,
      expiration: drop.expiration,
      amount: drop.amount,
      token: drop.token,
      description: drop.description,
      maxClaims: drop.maxClaims,
      zkPassAppId: drop.zkPassAppId,
      zkPassSchemaId: drop.zkPassSchemaId,
      decimals: drop.decimals as number,
      symbol: drop.symbol as string,
      creatorAddress: drop.creatorAddress,
      status: drop.status,
      claimsCount: drop.claimsCount || BigInt(0)
    }
  })

  return <Content
    drops={dropsData || []}
    includePageComponent
    resultSet={resultSet}
  />
}

