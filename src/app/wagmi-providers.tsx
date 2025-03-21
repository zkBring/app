'use client'
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains'; // add baseSepolia for testing
import { type ReactNode } from 'react';
import { type State, WagmiProvider } from 'wagmi';
import '@coinbase/onchainkit/styles.css'

import { config } from '@/app/configs/wagmi'
import {
  onchainApiKey
} from '@/app/configs'
 
function Provider (props: {
  children: ReactNode;
  initialState?: State;
}) {
  const queryClient = new QueryClient()
 
  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Provider