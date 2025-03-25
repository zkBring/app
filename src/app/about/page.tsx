'use server'

import {
  generateMetadataUtil
} from '@/utils'
import type { Metadata } from 'next'
import Content from './content'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataUtil({
    description: `About`
  })
}


export default async function About() {
  return <Content />
}

