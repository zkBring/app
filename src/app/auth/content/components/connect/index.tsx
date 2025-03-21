'use client'
import {
  FC
} from 'react'
import {
  Container,
  ButtonStyled
} from './styled-components'
import {
  useAppDispatch
} from '@/lib/hooks'

import { useAppKit } from '@reown/appkit/react'
import { useAccount, useDisconnect } from "wagmi"

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';

const Connect: FC = () => {
  const dispatch = useAppDispatch()
  // const { open } = useAppKit()
  const { address, isConnected, chain } = useAccount()
  const { disconnect } = useDisconnect()

  return <Container>
    <ConnectWallet />
  </Container>
}

export default Connect
