'use client'
import { FC } from 'react'
import {
  Container,
  ImageStyled,
  TitleStyled,
} from './styled-components'
import ErrorQRImage from '@/images/error.png'
import { useAppSelector } from '@/lib/hooks'
import {
  ExplorerButton
} from '@/components/common'
import { TProps } from './types'

const ErrorTransaction: FC<TProps> = () => {
  const {
    link: {
      tx_hash,
      chain_id
    }
  } = useAppSelector(state => ({
    link: {
      tx_hash: state.link.tx_hash,
      chain_id: state.link.chain_id
    }
  }))

  return <Container>
    <ImageStyled
      height={240}
      width={240}
      alt='Error'
      src={ErrorQRImage}
    />
    <TitleStyled>Transaction failed</TitleStyled>
    <ExplorerButton
      hash={tx_hash}
      chainId={chain_id}
    />
  </Container>
}

export default ErrorTransaction
