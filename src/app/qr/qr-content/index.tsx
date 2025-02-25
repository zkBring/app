'use client'
import { FC, useEffect, useState } from 'react'
import { TProps } from './types'
import {
  TQRScreen
} from '@/types'
import { ThemeProvider } from 'styled-components'
import { light } from '@/themes'
import { defineQRScreen } from '@/utils'
import ErrorQRNotFound from './error-qr-not-found'
import ErrorQRNotMapped from './error-qr-not-mapped'
import ErrorQRSecretMissed from './error-qr-secret-missed'
import ErrorServer from './error-server'
import Loading from './loading'
import {
  ethers
} from 'ethers'
import {
  getQRData
} from '@/app/api'
import * as wccrypto from '@walletconnect/utils/dist/esm'
import { isAxiosError } from 'axios'
import { redirect } from 'next/navigation'
import {
  Header
} from '@/components/common'

const defineScreen = (
  screen: TQRScreen
) => {
  switch (screen) {
    case 'qr_not_found':
      return <ErrorQRNotFound />
    case 'qr_not_mapped':
      return <ErrorQRNotMapped />
    case 'qr_secret_missed':
      return <ErrorQRSecretMissed />
    case 'qr_server_error':
      return <ErrorServer />
    case 'initial':
      return <Loading />
    default:
      return <h2>Error</h2>
  }
}


const getLink = async (
  qr_secret: string
) => {
  try {
    const qrId = new ethers.Wallet(qr_secret).address

    const qrData = await getQRData(qrId)
    const {
      data: {
        success,
        encrypted_claim_link
      }
    } = qrData



    if (success) {
      const decryptedLink = wccrypto.decrypt({ encoded: encrypted_claim_link, symKey: qr_secret })
      return {
        decryptedLink,
        error: null
      }
    }
    return {
      decryptedLink: null,
      error: 404
    }
  } catch (err: unknown) {

    if (isAxiosError(err)) {
      const {
        status
      } = err

      return {
        decryptedLink: null,
        error: status
      }
    }

    return {
      decryptedLink: null,
      error: 500
    }
  }
}



const Content: FC<TProps> = () => {
  const [
    screen,
    setScreen
  ] = useState<TQRScreen>('initial')

  useEffect(() => {
    const init = async () => {
      const url = new URL(window.location.href)
      const { hash } = url
      if (!hash) {
        setScreen('qr_secret_missed')
        return
      }
      const result = await getLink(hash.replace('#', ''))

      
      const {
        decryptedLink,
        error
      } = result
      if (error) {
        const screen = defineQRScreen(
          error
        )
        setScreen(screen)
        return
      }
      if (decryptedLink) {
        redirect(decryptedLink)
        return
      }

    }

    init()
  }, [])



  // const screen = defineQRScreen(error)
  return <ThemeProvider theme={light}>
    <Header />
    {defineScreen(
      screen
    )}
  </ThemeProvider>
}

export default Content