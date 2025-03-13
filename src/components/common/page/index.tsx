'use client'
import {
  FC,
  useEffect
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
  useAppDispatch
} from '@/lib/hooks'
import {
  setUserAddress,
  setUserChainId
} from '@/lib/slices'
import { useAppKit } from '@reown/appkit/react'
import { useAccount, useDisconnect } from "wagmi"

const Page: FC<TProps> = ({
  children
}) => {
  const { address, chain } = useAccount()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!address || !chain) {
      return
    }

    dispatch(setUserAddress(address))
    dispatch(setUserChainId(chain.id))

  }, [
    address,
    chain
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
