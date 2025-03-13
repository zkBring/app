import { FC } from 'react'
import TProps from './types'
import {
  TTable,
  TTableItem,
  TTableItemTitle,
  TTableItemValue
} from './styled-components'

const COMISSION_VALUE = 0.003  // 0.3%

const TransactionsData: FC<TProps> = ({
  comission,
  amount,
  totalAmount,
  symbol
}) => {

  return <TTable>
    <TTableItem>
      <TTableItemTitle>
        Tokens required for drop
      </TTableItemTitle>
      <TTableItemValue>
        {amount} {symbol}
      </TTableItemValue>
    </TTableItem>


    <TTableItem>
      <TTableItemTitle>
        Fee {BigInt(COMISSION_VALUE) * BigInt(COMISSION_VALUE)}
      </TTableItemTitle>
      <TTableItemValue>
      {comission} {symbol}
      </TTableItemValue>
    </TTableItem>


    <TTableItem>
      <TTableItemTitle>
        Total
      </TTableItemTitle>
      <TTableItemValue>
        {totalAmount} {symbol}
      </TTableItemValue>
    </TTableItem>
  </TTable>
}

export default TransactionsData