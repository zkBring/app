'use client'
import {
  FC,
  useState
} from 'react'
import {
  Page,
  LaunchWidget,
  LaunchContainer,
  ButtonsContainer,
  Text,
  Link
} from '@/components/common'
import {
  ButtonStyled,
  AudienceStyled,
  InputStyled
} from './styled-components'
import {
  TProofProvider,
  TZKTLSService
} from '@/types'
import {
  setZKTLSOptions
} from '@/lib/slices'
import { useDispatch } from 'react-redux'

import {
  DropAudienceIcon,
  XAudienceIcon,
  TikTokIcon,
  GithubIcon,
  AmazonIcon
} from '@/components/icons'
import { useRouter } from 'next/navigation'

const proofProvidersOptions = [
  {
    title: 'X (Twitter)',
    value: 'x',
    image: <XAudienceIcon />,
  }, {
    title: 'Custom',
    value: 'custom',
    image: <DropAudienceIcon />
  }, {
    title: 'Tiktok',
    value: 'tiktok',
    image: <TikTokIcon />,
    disabled: true
  }, {
    title: 'Github',
    value: 'github',
    image: <GithubIcon />,
    disabled: true
  }, {
    title: 'Amazon',
    value: 'amazon',
    image: <AmazonIcon />,
    disabled: true
  }
]


const LaunchAudience: FC = () => {
  const [ handleKey, setHandleKey ] = useState<string>('')
  const [ providerID, setProviderID ] = useState<string>('')
  const [ secret, setSecret ] = useState<string>('')
  const [ appID, setAppID ] = useState<string>('')
  const [ proofProvider, setProofProvider ] = useState<TProofProvider>('x')
  const [ zkTLSService, setZkTLSService ] = useState<TZKTLSService>('reclaim')
  const router = useRouter()
  const dispatch = useDispatch()

  return <Page>
    <LaunchContainer
      breadcrumbs={[
        {
          title: 'Audience',
          status: 'current'
        }, {
          title: 'Token',
        }, {
          title: 'Drop'
        }, {
          title: 'Launch'
        }
      ]}
    >
      <LaunchWidget title='Choose your audience'>
        <Text>
          ✨ Need custom Web Proof?  <Link href="#">Contact one</Link>
        </Text>
        <AudienceStyled
          onChange={(value) => {
            if (value === 'custom') {
              setHandleKey('')
              setProviderID('')
              setAppID('')
              setSecret('')
            }

            console.log({ value })
            setProofProvider(value)
          }}
          value={proofProvider}
          options={proofProvidersOptions}
        />
        {
          proofProvider === 'custom' && <>
            <InputStyled
              title='Handle ID'
              value={handleKey}
              placeholder='e.g. 123456'
              onChange={(value: string) => {
                setHandleKey(value)
                return value
              }}
            />

            <InputStyled
              title='Provider ID'
              value={providerID}
              placeholder='e.g. 123456'
              onChange={(value: string) => {
                setProviderID(value)
                return value
              }}
            />

            <InputStyled
              title='App ID'
              value={appID}
              placeholder='e.g. 123456'
              onChange={(value: string) => {
                setAppID(value)
                return value
              }}
            />

            <InputStyled
              title='Secret'
              value={secret}
              placeholder='e.g. 123456'
              onChange={(value: string) => {
                setSecret(value)
                return value
              }}
            />
          </>
        }
        

        <ButtonsContainer>
          <ButtonStyled
            appearance='action'
            onClick={() => {
              dispatch(
                setZKTLSOptions({
                  zkTLSService,
                  proofProvider,
                  appID,
                  secret,
                  providerID,
                  handleKey
                })
              )
              router.push(`/launch/token-data`)
            }}
            disabled={false}
          >
            Next
          </ButtonStyled>
        </ButtonsContainer>
      </LaunchWidget>
    </LaunchContainer>
    
  </Page>
}

export default LaunchAudience
