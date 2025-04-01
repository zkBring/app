'use client'
import { FC } from 'react'
import {
  WidgetStyled,
  Label,
  LabelValue,
  DashedProgressBarStyled
} from './styled-components'
import TProps from './types'

const ClaimsCounter: FC<TProps> = ({
  value,
  limit,
  symbol
}) => {
  const valueBN = BigInt(value)
  const limitBN = BigInt(limit)
  const ratio = ((valueBN * BigInt(100)) / limitBN)

  return <WidgetStyled>
    <Label>
      {value} tokens claimed

      <LabelValue>
        {limit} {symbol}
      </LabelValue>
    </Label>

    <DashedProgressBarStyled
      current={Number(ratio)}
      max={100}
      dashCount={80}
    />

  </WidgetStyled>
}

export default ClaimsCounter