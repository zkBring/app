import { TWalletName } from "@/types"

export type TInitialState = {
  code: string | null
  preferred_wallet: TWalletName | null
  expiration_time: number | null
  wei_amount: string | null
  link_id: string | null
  claiming_finished_description: string | null
  claiming_finished_button_title: string | null
  claiming_finished_button_url: string | null
  claiming_finished_auto_redirect: boolean | null
  claiming_finished_button_on: boolean | null
  tx_hash: string | null
  loading: boolean
  chain_id: number | null

  optimistic_claim_ui: boolean
}