'use server'
import {
  generateMetadataUtil,
  createSDK,
} from '@/utils'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'
import {
  environment
} from '@/app/configs'
import {
  TEnvironment
} from '@/types'
import zkTLSConfig from '@/app/configs/zk-tls'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `All drops`
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

export default async function Drops() {
  const data = await getInitialData()

  const zkPassAppId = zkTLSConfig[environment as TEnvironment].zkPassAppId

  if (!data) {
    return <h1>Not found</h1>
  }

  const { drops } = data

  console.log({
    drops
  })
  const dropsData = drops.map(drop => {
    if (drop.zkPassAppId !== zkPassAppId) {
      return null
    }
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
      decimals: 18,
      symbol: 'BRING',
      creatorAddress: drop.creatorAddress
    }
  })


  return <Content drops={dropsData || []} />
}

