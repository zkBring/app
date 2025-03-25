import { dashboardApiKey } from '@/app/configs'
import { JsonRpcProvider, JsonRpcSigner } from 'ethers'
import {
  BringSDK
} from 'zkbring-sdk'

let sdk: null | BringSDK = null

type TCreateSDK = (
  signer: JsonRpcSigner | JsonRpcProvider
) => BringSDK

const createSDK: TCreateSDK = (
  provider
) => {
  if (sdk) { return sdk }
  sdk = new BringSDK({
    walletOrProvider: provider
  })

  return sdk
}

export default createSDK