import {
  jsonRPCBase,
  jsonRPCBaseSepolia
} from '@/app/configs'

const defineJSONRpcUrl = (chainId: number) => {
  switch (chainId) {
    case 8453:
      return jsonRPCBase
    case 84532:
      return jsonRPCBaseSepolia
    default:
      return jsonRPCBase
  }  
}

export default defineJSONRpcUrl