'use server'
import {
  generateMetadataUtil,
  createSDK,
  defineJSONRPC
} from '@/utils'
import { ethers } from 'ethers'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'
import { drops as dropsApi } from '@/app/api'


type tParams = Promise<{ drop_id: string }>

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `Drops`
  })
}

const getInitialData = cache(async (drop_id: string) => {
  try {

    const BASE_SEPOLIA_CHAIN_ID = 84532
    const jsonRpcUrl = defineJSONRPC(BASE_SEPOLIA_CHAIN_ID)

    const provider = new ethers.JsonRpcProvider(jsonRpcUrl, BASE_SEPOLIA_CHAIN_ID, {
      staticNetwork: true
    })

    const sdk = createSDK(provider)
    const drop = await sdk.getDrop(drop_id)

    return drop
  } catch (err: unknown) {
    console.log({
      err
    })
  }
})

export default async function Drop({
  params
}: {
  params: tParams
}) {

  const paramsData = await params
  const data = await getInitialData(paramsData.drop_id)
  console.log({ data })
  if (!data) {
    return <h1>Not found</h1>
  }

  const {
    title,
    address,
    expiration,
    amount,
    token,
    description,
    maxClaims,
    zkPassAppId,
    zkPassSchemaId
  } = data

  return <Content
    drop={{
      title,
      address,
      expiration,
      amount,
      token,
      description,
      maxClaims,
      zkPassAppId,
      zkPassSchemaId
    }}
  />
}

