'use client'
import {
  FC,
  useState,
  useEffect
} from 'react'
import {
  Page,
  LaunchWidget,
  LaunchContainer,
  ButtonsContainer,
  Button
} from '@/components/common'
import {
  TextareaStyled, 
  InputStyled
} from './styled-components'
import {
  InputDropIcon
} from '@/components/icons'
import { useRouter } from 'next/navigation'
import {
  setDropData,
  setLoading
} from '@/lib/slices'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/lib/hooks'
import {
  isWhitelisted
} from '@/utils'

const LaunchDropDescription: FC = () => {

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
    if (address) {
      if (!isWhitelisted(address)) {
        return router.push('/drops')
      }
    }
  }, [
    address
  ])

  useEffect(() => {
    dispatch(
      setLoading(
        false
      )
    )
  }, [])

  const [
    title,
    setTitle
  ] = useState<string>('')

  const [
    description,
    setDescription
  ] = useState<string>('')

  const defineIfNextDisabled = () => {
    return !title
  }

  const router = useRouter()
  const dispatch = useDispatch()

  return <Page>
    <LaunchContainer
      breadcrumbs={[
        {
          title: 'Audience'
        }, {
          title: 'Token',
        }, {
          title: 'Drop',
          status: 'current'
        }, {
          title: 'Launch'
        }
      ]}
    >
      <LaunchWidget title='What are you dropping?'>
      <InputStyled
          value={title}
          disabled={loading}
          icon={<InputDropIcon />}
          placeholder='e.g. LFG!'
          onChange={(value: string) => {
            setTitle(value)
            return value
          }}
          title='Drop name'
        />

        <TextareaStyled
          value={description}
          disabled={loading}
          placeholder='Tell the world about your project'
          onChange={(value: string) => {
            setDescription(value)
            return value
          }}
          title='Drop description (optional)'
        />

        <ButtonsContainer>
          <Button
            appearance='action'
            loading={loading}
            disabled={defineIfNextDisabled()}
            onClick={() => {

              dispatch(setDropData({
                title,
                description
              }))
              dispatch(
                setLoading(
                  true
                )
              )

              router.push(`/launch/transactions`)
            }}
          >
            Next
          </Button>

          <Button
            to={`/launch/token-data`}
          >
            Back
          </Button>
        </ButtonsContainer>

      </LaunchWidget>
    </LaunchContainer>
  </Page>
}

export default LaunchDropDescription
