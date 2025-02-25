'use client'
import { TProps } from './types'
import { FC } from 'react'
import {
  Container,
  TitleStyled,
  SubtitleStyled
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
    <TitleStyled>Claim {tokenData.symbol}</TitleStyled>
    <SubtitleStyled>
      Please proceed to receive tokens
    </SubtitleStyled>
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
