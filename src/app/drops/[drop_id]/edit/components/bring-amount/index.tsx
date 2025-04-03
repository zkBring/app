import { FC, useEffect, useState } from 'react'
import { getERC20TokenBalance } from '@/utils'
import { ethers } from 'ethers'
import { BringTokenIcon } from '@/components/icons'
import {
  TokenCounterStyled,
  TextStyled,
  WidgetStyled
} from './styled-components'
import TProps from './types'

import {
  TOKEN_STAKE_AMOUNT,
  TOKEN_ADDRESS
} from '@/app/configs/app-token'

const BringAmount: FC<TProps> = ({
  address,
  signer,
  isStaked,
  action
}) => {
  
  const [
    bringAmount,
    setBringAmount
  ] = useState<null | string>(null)

  useEffect(() => {
    if (!signer || !address) {
      return 
    }
    const init = async () => {
      const bringAmount = await getERC20TokenBalance(
        TOKEN_ADDRESS,
        address,
        signer
      )

      if (bringAmount) {
        const amoutFormatted = ethers.formatUnits(
          bringAmount.tokenAmount,
          bringAmount.tokenDecimals
        )
        setBringAmount(
          amoutFormatted.toString().split('.')[0]
        )
      }
    }

    init()
  }, [
    signer,
    address
  ])

  return <WidgetStyled title="Get featured on Bring platform">

    <TextStyled>
      Hold at least {TOKEN_STAKE_AMOUNT} BRING tokens in your wallet to have your drop featured on the zkBring homepage and discovery section. You currently hold:
    </TextStyled>

    <TokenCounterStyled
      value={BigInt(bringAmount || '0')}
      tokenSymbol='BRING'
      tokenIcon={<BringTokenIcon />}
      max={BigInt(TOKEN_STAKE_AMOUNT)}
      action={action}
      isStaked={isStaked}
    />

  </WidgetStyled>
}

export default BringAmount