type TProps = {
  claimAmount: string // how many tokens to be claimed at the moment (atomic)
  alreadyClaimed: string // already claimed
  limit: string
  symbol?: string
  decimals: number
}

export default TProps