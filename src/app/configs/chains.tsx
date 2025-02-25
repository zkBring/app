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
  137: {
    chainName: 'Polygon',
    displayName: 'Polygon',
    defaultWalletApp: 'coinbase_smart_wallet',
    testnet: false,
    alchemySupport: true,
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: [
      'https://poly-rpc.gateway.pokt.network/'
    ],
    blockExplorerUrls: [
      'https://polygonscan.com'
    ]
  },
  1: {
    chainName: 'Ethereum Mainnet',
    displayName: 'Mainnet',
    defaultWalletApp: 'coinbase_smart_wallet',
    testnet: false,
    alchemySupport: true,
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: [
      `https://mainnet.infura.io/v3/${alchemyApiKey}`
    ],
    blockExplorerUrls: [
      'https://etherscan.io'
    ]
  },
  13371: {
    chainName: 'Immutable zkEVM',
    displayName: 'Immutable zkEVM',
    defaultWalletApp: 'coinbase_smart_wallet',
    testnet: false,
    alchemySupport: false,
    nativeCurrency: {
      name: 'IMX',
      symbol: 'IMX',
      decimals: 18
    },
    rpcUrls: [
      'https://immutable-zkevm.drpc.org'
    ],
    blockExplorerUrls: [
      'https://explorer.immutable.com'
    ]
  },
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
  }
}

export default chains