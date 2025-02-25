'use client'

import tokenSymbol from '@/images/erc20-token-placeholder.png'
import { FC } from 'react'
import {
  TokenAmount,
  TitleERC20Component,
  SymbolERC20,
  Container,
  ImageStyled
} from './styled-components'


import { ethers } from 'ethers'
import TProps, { TStatus } from './types'

const defineTitle = (status?: TStatus) => {
  switch (status) {
    case 'finished':
      return 'You have received'
    case 'initial':
      return 'You were sent'
    default:
      return null
  }
}

const ERC20TokenPreview: FC<TProps> = ({
  src,
  amount,
  decimals,
  name,
  status
}) => {
  return <Container> 
    <TitleERC20Component>
      {defineTitle(status)}
      <ImageStyled
        src={src || tokenSymbol}
        alt={name}
        width={16}
        height={16}
      />
      <SymbolERC20>{name}</SymbolERC20>
    </TitleERC20Component>
    <TokenAmount>{ethers.formatUnits(amount as string, decimals)}</TokenAmount>
  </Container>
}

export default ERC20TokenPreview