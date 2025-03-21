'use client'
import { TProps } from './types'
import { FC } from 'react'
import {
  Container
} from './styled-components'
import {
  Button,
  TokenPreview
} from '@/components/common'


const InitialScreen: FC<TProps> = ({
  tokenImage,
  tokenAmount,
  tokenSymbol,
  decimals,
  onSubmit
}) => {

  return <Container>
    <TokenPreview
      src={tokenImage || ''}
      name={tokenSymbol || ''}
      tokenStandard='ERC20'
      amount={tokenAmount as string}
      decimals={decimals as number}
      claimed={false}
    />
    <Button
      appearance='action'
      onClick={() => {
        onSubmit()
      }}
    >
      Claim
    </Button>
  </Container>
}

export default InitialScreen
