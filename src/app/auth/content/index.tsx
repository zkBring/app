'use client'
import {
  FC, useEffect
} from 'react'
import { TProps } from './types'
import { useRouter } from 'next/navigation'
import {
  TitleStyled,
  TextStyled,
  ImageStyled,
  Container
} from './styled-components'
import {
  Page
} from '@/components/common'
import { TAuthorizationStep } from '@/types'
import {
  Connect
} from './components'
import { useAppSelector } from '@/lib/hooks'
import isMobile from 'is-mobile'
import { useDispatch } from 'react-redux'
import {
  setAuthorizationStep
} from '@/lib/slices'
import Image from '@/images/connect-image.png'

const defineContent = (
  step: TAuthorizationStep
) => {
  switch (step) {
    case 'initial':
      return null
    case 'connect':
      return <Connect />
    case 'wrong_device':

  }
}

const defineTitle = (
  step: TAuthorizationStep
) => {
  switch (step) {

    case 'connect':
      return 'Connect wallet'
    case 'wrong_device':
      return 'Please, use desktop browser'
    case 'initial':
    default:
      return 'Loading'

  }
}

const defineText = (
  authorizationStep: TAuthorizationStep,
) => {
  switch (authorizationStep) {
    case 'connect':
      return 'Enable zkBring to view your address and suggest transactions for approval'
    case 'wrong_device':
      return 'zkBring dashboard is only available on desktop browsers'
    default:
      return ''
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

  const title = defineTitle(authorizationStep)
  const text = defineText(authorizationStep)

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
    <Container>
      <ImageStyled
        src={Image}
        width={280}
        height={140}
        alt='Connection image'
      />
      <TitleStyled>{title}</TitleStyled>
      {text && <TextStyled>{text}</TextStyled>}
      {content}
    </Container>
  </Page>
}

export default AuthContent
