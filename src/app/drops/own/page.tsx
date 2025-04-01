'use server'

import {
  generateMetadataUtil,
  createSDK
} from '@/utils'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from '../content'
export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `Own drops`
  })
}

const getInitialData = cache(async () => {
  try {

    const sdk = createSDK({})
    const drops = await sdk.getDrops({
      creator: ''
    })

    return drops
  } catch (err: unknown) {
    console.log({
      err
    })
  }
})


export default async function OwnDrops() {
  const data = await getInitialData()

  if (!data) {
    return <h1>Not found</h1>
  }
  const { drops } = data
  const dropsData = drops.map(drop => ({
    title: drop.title,
    address: drop.address,
    expiration: drop.expiration,
    amount: drop.amount,
    token: drop.token,
    description: '',
    maxClaims: drop.maxClaims,
    zkPassAppId: '',
    zkPassSchemaId: '',
    decimals: 18,
    symbol: 'BRING'
  }))

  return <Content drops={dropsData || []} />
}

