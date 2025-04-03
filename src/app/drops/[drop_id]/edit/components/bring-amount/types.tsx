import { JsonRpcSigner } from "ethers"

type TProps = {
  isStaked: boolean
  action: (
    isStaked: boolean
  ) => void
  address: string
  signer: JsonRpcSigner
}

export default TProps
