'use server'
import './globals.css'
import styles from './page.module.css'
import StoreProvider from './providers/store-provider'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import Provider from "./wagmi-providers"
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers' // added
import { config } from './configs/wagmi'
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
  const initialState = cookieToInitialState(
    config,
    (await headers()).get('cookie')
  )
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className={styles.page}>
        <Provider initialState={initialState}>
          <StyledComponentsRegistry>
            <StoreProvider>
              {children}
            </StoreProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  )
}