'use server'
import {
  generateMetadataUtil,
  createSDK,
  defineJSONRPC,
  getTokenERC20Data
} from '@/utils'
import { ethers } from 'ethers'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'


type TParams = Promise<{ drop_id: string }>

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `Drops`
  })
}

const getInitialData = cache(async (drop_id: string) => {
  try {

    const BASE_SEPOLIA_CHAIN_ID = 84532


    const sdk = createSDK({})
    const drop = await sdk.getDrop(drop_id)
    const tokenData = await getTokenERC20Data(
      drop.token,
      BASE_SEPOLIA_CHAIN_ID
    )
    return {
      drop,
      tokenData
    }
  } catch (err: unknown) {
    console.log({
      err
    })
  }
})

export default async function Drop({
  params
}: {
  params: TParams
}) {

  const paramsData = await params
  const data = await getInitialData(paramsData.drop_id)

  if (!data) {
    return <h1>Not found</h1>
  }

  const {
    drop,
    tokenData
  } = data

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
  } = drop



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

    tokenData={tokenData}
  />
}

