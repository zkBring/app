'use client'
import { FC } from 'react'
import {
  WidgetStyled,
  Label,
  LabelValue,
  DashedProgressBarStyled
} from './styled-components'
import TProps from './types'
import { ethers } from 'ethers'

const ClaimsCounter: FC<TProps> = ({
  claimAmount, // per one claim
  limit, // max claims
  alreadyClaimed,
  symbol,
  decimals
}) => {
  const alreadyClaimedBN = BigInt(alreadyClaimed)
  const claimAmountBN = BigInt(claimAmount)
  const limitBN = BigInt(limit)
  const ratioAlreadyClaimed = ((alreadyClaimedBN * BigInt(100)) / limitBN)

  return <WidgetStyled>
    <Label>
      {ratioAlreadyClaimed} tokens claimed

      <LabelValue>
        {ethers.formatUnits(limitBN * claimAmountBN, decimals)} {symbol}
      </LabelValue>
    </Label>

    <DashedProgressBarStyled
      current={Number(ratioAlreadyClaimed)}
      max={100}
      dashCount={80}
    />

  </WidgetStyled>
}

export default ClaimsCounter