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



const BringAmount: FC<TProps> = ({
  address,
  signer,
  isPublic,
  action
}) => {
  const [
    bringAmount,
    setBringAmount
  ] = useState<null | string>(null)

  useEffect(() => {
    const init = async () => {
      const bringAmount = await getERC20TokenBalance(
        '0x02E739740B007bd5E4600b9736A143b6E794D223',
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
  }, [])

  return <WidgetStyled title="Get featured on Bring platform">

    <TextStyled>
      Hold at least 5,000,000 BRING tokens in your wallet to have your drop featured on the zkBring homepage and discovery section. You currently hold:
    </TextStyled>

    <TokenCounterStyled
      value={BigInt(bringAmount || '0')}
      tokenSymbol='BRING'
      tokenIcon={<BringTokenIcon />}
      max={BigInt('5000000')}
      action={action}
      isPublic={isPublic}
    />

  </WidgetStyled>
}

export default BringAmount