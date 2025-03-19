import { JsonRpcSigner } from "ethers"

type TProps = {
  isPublic: boolean
  action: (
    isPublic: boolean
  ) => void
  address: string
  signer: JsonRpcSigner
}

export default TProps
