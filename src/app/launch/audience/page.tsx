'use client'
import {
  FC,
  useEffect,
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
  InputStyled,
  TextStyled
} from './styled-components'
import {
  TProofProvider,
  TZKTLSService
} from '@/types'
import {
  setZKTLSOptions,
  setLoading,
  clearLaunch
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
import { useAppSelector } from '@/lib/hooks'

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
  const [ zkPassSchemaId, setZkPassSchemaId ] = useState<string>('')
  const [ zkPassAppId, setZkPassAppId ] = useState<string>('')

  useEffect(() => {
    dispatch(clearLaunch())
  }, [])

  const [
    proofProvider,
    setProofProvider
  ] = useState<TProofProvider>('x')
  const [
    zkTLSService,
    setZkTLSService
  ] = useState<TZKTLSService>('reclaim')
  const router = useRouter()
  const dispatch = useDispatch()

  const {
    launch: {
      loading
    },
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  useEffect(() => {
    if (!address) {
      return router.push('/auth')
    }
  }, [])

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
        <TextStyled>
          ✨ Need custom Web Proof?  <Link href="#">Contact one</Link>
        </TextStyled>
        <AudienceStyled
          onChange={(value) => {
            if (value === 'custom') {
              setZkPassSchemaId('')
              setZkPassAppId('')
            }

            setProofProvider(value)
          }}
          value={proofProvider}
          options={proofProvidersOptions}
        />
        {
          proofProvider === 'custom' && <>
            <InputStyled
              title='ZKPass App ID'
              value={zkPassAppId}
              placeholder='e.g. 123456'
              onChange={(value: string) => {
                setZkPassAppId(value)
                return value
              }}
            />

            <InputStyled
              title='ZKPass Schema ID'
              value={zkPassSchemaId}
              placeholder='e.g. 123456'
              onChange={(value: string) => {
                setZkPassSchemaId(value)
                return value
              }}
            />
          </>
        }
        

        <ButtonsContainer>
          <ButtonStyled
            appearance='action'
            loading={loading}
            onClick={() => {

              dispatch(
                setZKTLSOptions({
                  zkTLSService,
                  proofProvider,
                  zkPassAppId,
                  zkPassSchemaId
                })
              )
              dispatch(
                setLoading(
                  true
                )
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
