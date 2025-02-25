'use server'

import type { Metadata } from 'next'
// import { headers } from 'next/headers'

import Content from '@/app/qr/qr-content'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Linkdrop Claim App',
    description: `QR set`,
  }
}

export default async function QR() {
  // const headersList = await headers()

  return <Content />
}

