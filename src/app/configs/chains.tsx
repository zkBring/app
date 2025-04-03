import { TWalletName } from "@/types"
import { alchemyApiKey } from './'
import { type Chain } from 'viem'

export const zeroChain = {
  id: 543210,
  name: 'ZERϴ Network',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        'https://rpc.zerion.io/v1/zero'
      ]
    },
  },
  blockExplorers: {
    default: {
      name: 'Zerion Explorer',
      url: 'https://explorer.zero.network/'
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 1142990
    },
  },
} as const satisfies Chain

type TChains = {
  [chainId: number]: {
    chainName: string
    displayName: string
    testnet: boolean
    alchemySupport: boolean
    defaultWalletApp: TWalletName
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    },
    rpcUrls: string[]
    blockExplorerUrls: string[]
  }
}

const chains: TChains = {
  
  8453: {
    chainName: 'Base',
    defaultWalletApp: 'coinbase_smart_wallet',
    displayName: 'Base',
    testnet: false,
    alchemySupport: false,
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      'https://developer-access-mainnet.base.org'
    ],
    blockExplorerUrls: [
      'https://basescan.org'
    ]
  },
  84532: {
    chainName: 'Base Sepolia',
    defaultWalletApp: 'coinbase_smart_wallet',
    displayName: 'Base Sepolia',
    testnet: true,
    alchemySupport: false,
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      'https://base-sepolia.drpc.org'
    ],
    blockExplorerUrls: [
      'https://sepolia.basescan.org'
    ]
  }
}

export default chains