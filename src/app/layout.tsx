'use server'
import './globals.css'
import styles from './page.module.css'
import StoreProvider from './providers/store-provider'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import ContextProvider from "./connect-providers"
import { headers } from 'next/headers' // added

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'zkBring platform'
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const headersObj = await headers();
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={styles.page}>
        <ContextProvider cookies={cookies}>
          <StyledComponentsRegistry>
            <StoreProvider>
              {children}
            </StoreProvider>
          </StyledComponentsRegistry>
        </ContextProvider>
      </body>
    </html>
  )
}