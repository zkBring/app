'use client'
import { FC } from 'react'
import {
  WidgetStyled,
  Label,
  LabelValue,
  ProgressBarStyled
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

    <ProgressBarStyled
      current={Number(ratio)}
      max={100}
    />

  </WidgetStyled>
}

export default ClaimsCounter