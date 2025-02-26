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
  linkParams,
  tokenData,
  setScreen
}) => {

  return <Container>
    <TokenPreview
      src={tokenData.image || ''}
      name={tokenData.symbol || ''}
      tokenStandard={tokenData.standard}
      amount={linkParams.amount}
      decimals={tokenData.decimals}
      claimed={false}
    />
    <Button
      appearance='action'
      onClick={() => {
        setScreen('select_wallet')
      }}
    >
      Claim
    </Button>
  </Container>
}

export default InitialScreen
