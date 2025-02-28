'use server'

import type { Metadata } from 'next'
// import { headers } from 'next/headers'

import Content from '@/app/qr/qr-content'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'zkBring platform',
    description: `zkBring platform`,
  }
}

export default async function QR() {
  // const headersList = await headers()

  return <Content />
}

