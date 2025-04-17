'use client'
import { FC } from 'react'
import {
  WidgetStyled,
  Label,
  LinkStyled,
  LabelValue,
  DashedProgressBarStyled
} from './styled-components'
import TProps from './types'
import { ethers } from 'ethers'
import {
  DocumentIcon
} from '@/components/icons'
import {
  defineExplorerURL
} from '@/utils'

const ClaimsCounter: FC<TProps> = ({
  claimAmount, // per one claim
  limit, // max claims
  alreadyClaimed,
  symbol,
  decimals,
  chainId,
  tokenAddress
}) => {
  const alreadyClaimedBN = BigInt(alreadyClaimed)
  const claimAmountBN = BigInt(claimAmount)
  const limitBN = BigInt(limit)
  const ratioAlreadyClaimed = ((alreadyClaimedBN * BigInt(100)) / limitBN)
  const tokensClaimed = claimAmountBN * alreadyClaimedBN
  const explorerAddress = defineExplorerURL(chainId)

  return <WidgetStyled>
    <Label>
      {ethers.formatUnits(tokensClaimed, decimals)} tokens claimed

      <LabelValue>
        <LinkStyled href={`${explorerAddress}/token/${tokenAddress}`} target="_blank">
          {ethers.formatUnits(limitBN * claimAmountBN, decimals)} {symbol} <DocumentIcon />
        </LinkStyled>
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