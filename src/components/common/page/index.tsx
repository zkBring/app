'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Main
} from './styled-components'
import { TProps } from './types'
import { ThemeProvider } from 'styled-components'
import { dark } from '@/themes'
import {
  Header,
  Footer
} from '@/components/common'
import {
  defineEthersSigner
} from '@/utils'
import {
  useAppDispatch
} from '@/lib/hooks'

import {
  setUserAddress,
  setUserChainId,
  setSigner,
  setConnectedUserData
} from '@/lib/slices'
import { useAppKit } from '@reown/appkit/react'
import {
  useAccount,
  useDisconnect
} from "wagmi"
import { useWalletClient } from 'wagmi'

const Page: FC<TProps> = ({
  children
}) => {
  const {
    address,
    chain
  } = useAccount()

  const { data: walletClient } = useWalletClient()


  const [
    userSigner,
    setUserSigner
  ] = useState<any>(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!walletClient) {
      return
    }
    const init = async () => {
      const userSigner = await defineEthersSigner(walletClient)
      setUserSigner(userSigner)
    }

    init()

  }, [walletClient])

  useEffect(() => {

    console.log({
      address,
      chain,
      userSigner
    })
    if (!address || !chain || !userSigner) {
      return
    }


    dispatch(setConnectedUserData({
      address,
      chainId: chain.id,
      signer: userSigner
    }))


  }, [
    address,
    chain,
    userSigner
  ])

  return <ThemeProvider theme={dark}>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </ThemeProvider>
}

export default Page
