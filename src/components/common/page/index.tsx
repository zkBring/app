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
  defineEthersSigner,
  createSDK
} from '@/utils'
import {
  useAppDispatch
} from '@/lib/hooks'
import {
  BringSDK
} from 'zkbring-sdk'
import {
  setConnectedUserData
} from '@/lib/slices'
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
  const [
    userProvider,
    setUserProvider
  ] = useState<any>(null)

  const dispatch = useAppDispatch()



  useEffect(() => {
    if (!walletClient) {
      return
    }
    const init = async () => {
      const {
        signer,
        provider
      } = await defineEthersSigner(walletClient)
      setUserSigner(signer)
      setUserProvider(provider)
    }

    init()

  }, [walletClient])

  useEffect(() => {
    if (!address || !chain || !userSigner || !userProvider) {
      return
    }

    dispatch(setConnectedUserData({
      address,
      chainId: chain.id,
      signer: userSigner,
      provider: userProvider
    }))

  }, [
    address,
    chain,
    userSigner,
    userProvider
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
