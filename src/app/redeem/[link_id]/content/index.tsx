'use client'
import {
  FC,
  useState
} from 'react'
import { TProps } from './types'
import {
  TTokenData,
  TClaimScreen,
  TLinkParams,
  TClaimError
} from '@/types'
import InitialScreen from './initial'
import { ThemeProvider } from 'styled-components'
import { light } from '@/themes'
import {
  Header
} from '@/components/common'
import SelectWallet from './select-wallet'
import ClaimReady from './claim-ready'
import ClaimFinished from './claim-finished'
import AlreadyClaimed from './already-claimed'
import ErrorLinkNotFound from './error-link-not-found'
import ErrorLinkExpired from './error-link-expired'
import ErrorServer from './error-server'
import ErrorTransaction from './error-transaction'
import ErrorMultipleClaimsForbidden from './error-multiple-claims-forbidden'

import { defineInitialClaimScreen } from '@/utils'

type ComponentsScreen = (TClaimScreen | TClaimError)

const defineScreen = (
  screen: ComponentsScreen,
  setScreen: (screen: ComponentsScreen) => void,
  linkParams?: TLinkParams,
  tokenData?: TTokenData
) => {
  switch (screen) {
    case 'link_not_found':
      return <ErrorLinkNotFound />
    case 'link_expired':
      return <ErrorLinkExpired />
    case 'server_error':
      return <ErrorServer />
    case 'transaction_error':
      return <ErrorTransaction
        linkParams={linkParams as TLinkParams}
      />
    case 'multiple_claims_forbidden_error':
      return <ErrorMultipleClaimsForbidden />

    case 'already_claimed':
      return <AlreadyClaimed
        linkParams={linkParams as TLinkParams}
        tokenData={tokenData as TTokenData}
      />
    case 'initial':
      return <InitialScreen
        linkParams={linkParams as TLinkParams}
        tokenData={tokenData as TTokenData}
        setScreen={setScreen}
      />
    case 'select_wallet':
      return <SelectWallet
        setScreen={setScreen}
      />
    case 'claim_ready':
      return <ClaimReady
        linkParams={linkParams as TLinkParams}
        tokenData={tokenData as TTokenData}
        setScreen={setScreen}
      />
    case 'claim_finished':
      return <ClaimFinished
        linkParams={linkParams as TLinkParams}
        tokenData={tokenData as TTokenData}
      />
    default:
      return <h2>ERROR</h2>
  }
}


const Content: FC<TProps> = ({
  linkParams,
  tokenData,
  status,
  error
}) => {
  const initialStatus = defineInitialClaimScreen(
    error,
    linkParams?.expiration_time,
    status
  )
  const [ screen, setScreen ]= useState<
    ComponentsScreen
  >(initialStatus)

  return <ThemeProvider theme={light}>
    <Header />
    {defineScreen(
      screen,
      setScreen,
      linkParams,
      tokenData
    )}
  </ThemeProvider>
}



export default Content