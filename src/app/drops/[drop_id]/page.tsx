'use server'
import {
  generateMetadataUtil,
  createSDK
} from '@/utils'
import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'
import { cookies } from 'next/headers'

type TParams = Promise<{ drop_id: string }>

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `Drops`
  })
}

const getInitialData = cache(async (
  drop_id: string,
  connectedAddress?: string
) => {
  try {

    const sdk = createSDK({})
    const drop = await sdk.getDrop(
      drop_id,
      connectedAddress
    )
    return {
      drop
    }
  } catch (err: unknown) {
    console.log({
      err1: err
    })
  }
})

export default async function Drop({
  params
}: {
  params: TParams
}) {

  const paramsData = await params

  const cookieStore = await cookies()
  const store = cookieStore.get('wagmi.store')
  let connectedAddress: string | undefined = undefined

  if (store) {
    const { value } = store
    const data = JSON.parse(value)
    const connectionData = (data?.state?.connections?.value[0] || [])[1]
    connectedAddress = connectionData?.accounts[0]
  }

  console.log({ connectedAddress })


  const data = await getInitialData(
    paramsData.drop_id,
    connectedAddress
  )
  if (!data) {
    return <h1>Not found</h1>
  }

  const {
    drop
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
    zkPassSchemaId,
    status,
    claimsCount,
    decimals,
    symbol,
    connectedUserClaimTxHash,
    hasConnectedUserClaimed
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
      zkPassSchemaId,
      decimals: decimals as number,
      symbol: symbol as string,
      creatorAddress: drop.creatorAddress,
      claimsCount: claimsCount || BigInt(0),
      status,
      connectedUserClaimTxHash,
      hasConnectedUserClaimed
    }}

  />
}

