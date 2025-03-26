'use client'
import {
  FC
} from 'react'
import {
  Container,
  ConnectWalletStyled
} from './styled-components'
import {
  useAppDispatch
} from '@/lib/hooks'

import { useAppKit } from '@reown/appkit/react'
import { useAccount, useDisconnect } from "wagmi"


const Connect: FC = () => {
  const dispatch = useAppDispatch()
  // const { open } = useAppKit()
  const { address, isConnected, chain } = useAccount()
  const { disconnect } = useDisconnect()

  return <Container>
    <ConnectWalletStyled />
  </Container>
}

export default Connect
