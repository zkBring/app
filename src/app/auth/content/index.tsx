'use client'
import {
  FC, useEffect
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
import { useRouter } from 'next/navigation'

import {
  Page
} from '@/components/common'
import { TAuthorizationStep } from '@/types'
import {
  Connect,
  Authorize
} from './components'
import { useAppSelector } from '@/lib/hooks'



const defineContent = (
  step: TAuthorizationStep
) => {
  switch (step) {
    case 'initial':
    case 'connect':
      return <Connect />
    case 'login':
      return <Authorize />
  }
}

const AuthContent: FC<TProps> = () => {

  const {
    user: {
      authorizationStep
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  const router = useRouter()

  const content = defineContent(authorizationStep)

  console.log({ authorizationStep })
  useEffect(() => {
    if (authorizationStep === 'authorized') {
      router.push(`/launch/audience`)
    }
  }, [authorizationStep])
  return <Page>
    {content}
  </Page>
}

export default AuthContent
