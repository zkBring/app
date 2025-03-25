'use server'

import {
  generateMetadataUtil,
  createSDK,
  defineJSONRPC
} from '@/utils'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'
import { drops as dropsApi } from '../api'
import { ethers } from 'ethers'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `All drops`
  })
}

const getInitialData = cache(async () => {
  try {

    const BASE_SEPOLIA_CHAIN_ID = 84532
    const jsonRpcUrl = defineJSONRPC(BASE_SEPOLIA_CHAIN_ID)

    const provider = new ethers.JsonRpcProvider(jsonRpcUrl, BASE_SEPOLIA_CHAIN_ID, {
      staticNetwork: true
    })

    const sdk = createSDK(provider)
    const drops = await sdk.getDrops({
      creator: ''
    })

    console.log({
      drops
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
  if (!data) {
    return <h1>Not found</h1>
  }

  const drops = data.map(drop => ({
    title: drop.contract,
    address: drop.contract,
    expiration: drop.expiration,
    amount: drop.amount,
    token: drop.token,
    description: '',
    maxClaims: drop.maxClaims,
    zkPassAppId: '',
    zkPassSchemaId: ''
  }))

  console.log({ drops })

  return <Content drops={drops || []} />
}

