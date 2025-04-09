'use client'
import { OnchainKitProvider } from 'zkbring-onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { baseSepolia } from 'wagmi/chains' // add baseSepolia for testing
import { type ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { defineAppNetwork } from '@/utils'
import 'zkbring-onchainkit/styles.css'
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
          chain={defineAppNetwork()} // add baseSepolia for testing 
          config={{
            appearance: {
              name: 'zkBring',        // Displayed in modal header
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