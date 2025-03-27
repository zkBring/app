'use client'
import {
  FC
} from 'react'
import {
  Container
} from './styled-components'
import {
  ConnectButton
} from '@/components/common'
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
    <ConnectButton />
  </Container>
}

export default Connect
