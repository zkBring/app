import { dashboardApiKey } from '@/app/configs'
import { JsonRpcProvider, JsonRpcSigner, ethers } from 'ethers'
import {
  BringSDK
} from 'zkbring-sdk'
import {
  defineJSONRPC
} from '@/utils'
import TransgateConnect from "@zkpass/transgate-js-sdk"


type TCreateSDKArgs = {
  signer?: JsonRpcSigner,
  transgateModule?: typeof TransgateConnect
}
type TCreateSDK = (args: TCreateSDKArgs) => BringSDK

const createSDK: TCreateSDK = ({
  signer,
  transgateModule
}) => {
  if (signer) {
    if (transgateModule) {
      return new BringSDK({
        walletOrProvider: signer,
        transgateModule: transgateModule
      })
    }
  }
  const BASE_SEPOLIA_CHAIN_ID = 84532
  const jsonRpcUrl = defineJSONRPC(BASE_SEPOLIA_CHAIN_ID)

  const provider = new ethers.JsonRpcProvider(jsonRpcUrl, BASE_SEPOLIA_CHAIN_ID, {
    staticNetwork: true
  })

  if (!transgateModule) {
    return new BringSDK({
      walletOrProvider: provider
    })
  }

  return new BringSDK({
    walletOrProvider: provider,
    transgateModule: transgateModule
  })
}

export default createSDK