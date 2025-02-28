import {
  jsonRPCBase
} from '@/app/configs'

const defineJSONRpcUrl = (chainId: number) => {
  switch (chainId) {
    case 8453:
      return jsonRPCBase
    default:
      return jsonRPCBase
  }  
}

export default defineJSONRpcUrl