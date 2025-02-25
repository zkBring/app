'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import { TProps } from './types'
import {
  TDispenserScreen,
  TProviderType,
  TDispenserError
} from '@/types'
import { ThemeProvider } from 'styled-components'
import { light } from '@/themes'
import {
  Header
} from '@/components/common'
import InitialScreen from './initial'
import DescriptionScreen from './description'
import HowItWorksScreen from './how-it-works'
import QRCodeScreen from './qr-code'

import { redirect } from 'next/navigation'

type ComponentsScreen = (TDispenserScreen | TDispenserError)


const defineContent = (
  screen: ComponentsScreen,
  setScreen: (
    screen: ComponentsScreen,
  ) => void,
  verificationUrl: string | null,
  tokenAmount: string | null,
  tokenSymbol: string | null,
  providerType: TProviderType | null,
  tokenImage: string | null,
  decimals: number | null
) => {
  switch (screen) {
    case 'initial': {
      return <InitialScreen
        verificationUrl={verificationUrl as string}
        tokenAmount={tokenAmount}
        tokenSymbol={tokenSymbol}
        providerType={providerType}
        tokenImage={tokenImage}
        decimals={decimals}
        onSubmit={() => {
          setScreen('description')
        }}
      />
    }
    case 'description':
      return <DescriptionScreen
        verificationUrl={verificationUrl as string}
        setScreen={setScreen}
      />

    case 'how_it_works':
      return <HowItWorksScreen
        setScreen={setScreen}
      />
    case 'qr-code':
      return <QRCodeScreen
        setScreen={setScreen}
        verificationUrl={verificationUrl as string}
      />
  }
}



const defineInitialClaimScreen = (error: TDispenserError | null) => {
  if (error) {
    return error
  }

  return 'initial'
}


const Content: FC<TProps> = ({
  error,
  reclaimVerificationURL,
  decimals,
  tokenAmount,
  tokenImage,
  tokenSymbol,
  providerType
}) => {

  const initialStatus = defineInitialClaimScreen(
    error
  )

  const [ screen, setScreen ]= useState<
    ComponentsScreen
  >(initialStatus)

  useEffect(() => {

  }, [])

  return <ThemeProvider theme={light}>
    <Header />
    {defineContent(
      screen,
      setScreen,
      reclaimVerificationURL,
      tokenAmount,
      tokenSymbol,
      providerType,
      tokenImage,
      decimals
    )}
  </ThemeProvider>
}



export default Content