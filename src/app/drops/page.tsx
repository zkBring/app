'use server'

import {
  generateMetadataUtil
} from '@/utils'
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

  return <Content drops={data || []} />
}

