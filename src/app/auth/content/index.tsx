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
  Connect,
  WrongDevice
} from './components'
import { useAppSelector } from '@/lib/hooks'
import isMobile from 'is-mobile'
import { useDispatch } from 'react-redux'
import {
  setAuthorizationStep
} from '@/lib/slices'

const defineContent = (
  step: TAuthorizationStep
) => {
  switch (step) {
    case 'initial':
      return null
    case 'connect':
      return <Connect />
    case 'wrong_device':
      return <WrongDevice />
    default:
      return null
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

  const dispatch = useDispatch()

  const content = defineContent(authorizationStep)

  useEffect(() => {
    if (isMobile()) {
      dispatch(setAuthorizationStep('wrong_device'))
    } else {
      dispatch(setAuthorizationStep('connect'))
    }
  }, [])

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
