import { FC } from 'react'
import TProps from './types'
import {
  TTable,
  TTableItem,
  TTableItemTitle,
  TTableItemValue
} from './styled-components'
import { ethers } from 'ethers'

const TransactionsData: FC<TProps> = ({
  fees,
  symbol,
  decimals
}) => {

  if (!fees) {
    return null
  }

  const amountFormatted = ethers.formatUnits(fees.amount, decimals)
  const totalAmountFormatted = ethers.formatUnits(fees.totalAmount, decimals)
  const comissionFormatted = ethers.formatUnits(fees.feeAmount, decimals)

  return <TTable>
    <TTableItem>
      <TTableItemTitle>
        Tokens required for drop
      </TTableItemTitle>
      <TTableItemValue>
        {amountFormatted} {symbol}
      </TTableItemValue>
    </TTableItem>


    <TTableItem>
      <TTableItemTitle>
        Fee {fees.fee * 100}%
      </TTableItemTitle>
      <TTableItemValue>
      {comissionFormatted} {symbol}
      </TTableItemValue>
    </TTableItem>


    <TTableItem>
      <TTableItemTitle>
        Total
      </TTableItemTitle>
      <TTableItemValue>
        {totalAmountFormatted} {symbol}
      </TTableItemValue>
    </TTableItem>
  </TTable>
}

export default TransactionsData