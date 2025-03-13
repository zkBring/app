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
import { TProps } from './types'

import {
  Page
} from '@/components/common'

const AuthContent: FC<TProps> = () => {
  const dispatch = useAppDispatch()
  const { open } = useAppKit()
  const { address, isConnected, chain } = useAccount()
  const { disconnect } = useDisconnect()


  return <Page>
    <Container>
      <ButtonStyled
        appearance='action'
        onClick={() => {
        if (isConnected) {
          disconnect()
        }
        open()
      }}
      >
        Connect
      </ButtonStyled>
    </Container>
  </Page>
}

export default AuthContent
