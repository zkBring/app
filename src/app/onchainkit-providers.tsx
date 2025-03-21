'use client';
 
import type { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains'; // add baseSepolia for testing 
import {
  onchainApiKey
}  from '@/app/configs'

export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={onchainApiKey} 
      chain={base as any} // add baseSepolia for testing 
      config={{
        appearance: {
          name: 'Your App Name',        // Displayed in modal header
          logo: 'https://your-logo.com',// Displayed in modal header
          mode: 'auto',                 // 'light' | 'dark' | 'auto'
          theme: 'default',             // 'default' or custom theme
        },
        wallet: { 
          display: 'modal'
        },
      }}
    >
      {props.children}
    </OnchainKitProvider>
  )
}