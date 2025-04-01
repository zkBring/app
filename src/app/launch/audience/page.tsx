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
  TEnvironment,
  TProofProvider
} from '@/types'
import {
  setZKTLSOptions,
  setLoading,
  clearLaunch
} from '@/lib/slices'
import { useDispatch } from 'react-redux'
import {
  DropAudienceIcon,
  XAudienceIcon
} from '@/components/icons'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/hooks'
import {
  environment
} from '@/app/configs'
import zkTLSConfig from '@/app/configs/zk-tls'

const createOptions = () => {
  const zkTLS = zkTLSConfig[environment as TEnvironment]

  const {
    schemas
  } = zkTLS

  const options = schemas.map(schema => {
    return {
      title: schema.description,
      value: schema.schemaId,
      image: <XAudienceIcon />,
    }
  })

  options.push({
    title: 'Custom',
    value: 'custom',
    image: <DropAudienceIcon />
  })

  return options
}

const LaunchAudience: FC = () => {
  const proofProvidersOptions = createOptions()

  const [ zkPassSchemaId, setZkPassSchemaId ] = useState<string>('')
  const [ zkPassAppId, setZkPassAppId ] = useState<string>('')

  useEffect(() => {
    dispatch(clearLaunch())
  }, [])

  const [
    proofProvider,
    setProofProvider
  ] = useState<TProofProvider | string>(proofProvidersOptions[0].value)

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
              const data = proofProvider === 'custom' ? {
                // if custom - take values from inputs
                zkPassAppId,
                zkPassSchemaId
              } : {
                // if not custom - take values from config
                zkPassAppId: zkTLSConfig[environment as TEnvironment].zkPassAppId,
                zkPassSchemaId: proofProvider
              }
              dispatch(
                setZKTLSOptions(data)
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
