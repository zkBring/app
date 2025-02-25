import {
  jsonRPCBase,
  jsonRPCMainnet,
  jsonRPCPolygon,
  jsonRPCZKEVM,
  jsonRPCZero
} from '@/app/configs'


const defineJSONRpcUrl = (chainId: number) => {
  switch (chainId) {
    case 1:
      return jsonRPCMainnet
    case 137:
      return jsonRPCPolygon
    case 543210:
      return jsonRPCZero
    case 13371:
      return jsonRPCZKEVM
    case 8453:
      return jsonRPCBase
    default:
      return jsonRPCBase
  }  
}

export default defineJSONRpcUrl