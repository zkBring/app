'use server'
import {
  generateMetadataUtil
} from '@/utils'

import type { Metadata } from 'next'
import { cache } from 'react'
import Content from './content'
import { drops as dropsApi } from '@/app/api'
import { use } from "react"

type tParams = Promise<{ drop_id: string }>

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `All drops`
  })
}

const getInitialData = cache(async (drop_id: string) => {
  try {
    const drops = await dropsApi.getOne(drop_id)
    return drops.data.campaign
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

  const paramsData = use(params)
  const data = await getInitialData(paramsData.drop_id)
  if (!data) {
    return <h1>Not found</h1>
  }

  return <Content drop={data} />
}

