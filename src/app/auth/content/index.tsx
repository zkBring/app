'use client'
import {
  FC, useEffect
} from 'react'
import { TProps } from './types'
import { useRouter } from 'next/navigation'

import {
  Page
} from '@/components/common'
import { TAuthorizationStep } from '@/types'
import {
  Connect
} from './components'
import { useAppSelector } from '@/lib/hooks'



const defineContent = (
  step: TAuthorizationStep
) => {
  switch (step) {
    case 'initial':
    case 'connect':
      return <Connect />
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

  useEffect(() => {
    if (authorizationStep === 'connected') {
      router.push(`/launch/audience`)
    }
  }, [authorizationStep])
  return <Page>
    {content}
  </Page>
}

export default AuthContent
