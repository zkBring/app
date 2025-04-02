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
      err1: err
    })
  }
})

export default async function Drops() {
  const data = await getInitialData()


  if (!data) {
    return <h1>Not found</h1>
  }

  const { drops } = data

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
      decimals: 18,
      symbol: 'BRING',
      creatorAddress: drop.creatorAddress,
      claimsCount: drop.claimsCount || BigInt(0)
    }
  })


  return <Content drops={dropsData || []} />
}

