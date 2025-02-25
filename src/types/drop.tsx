import TProviderType from "./provider-type"

type TDrop = {
  token_id: string
  token_amount: string
  token_address: string
  chain_id: number
  token_standard: string
  expiration_time: number
  transfer_id: string
  proxy_contract_version?: string
  creator_address?: string
  campaign_number: string
  symbol?: string
  claim_pattern?: string
  sender_signature?: string
  sponsored?: boolean
  link_key?: string
  title: string
  factory_address?: string
  campaign_id: string
  provider_type: TProviderType
}

export default TDrop