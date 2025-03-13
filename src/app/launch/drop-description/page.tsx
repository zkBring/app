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
  Button
} from '@/components/common'
import {
  TextareaStyled, 
  InputStyled
} from './styled-components'
import {
  InputDropIcon
} from '@/components/icons'
import { useRouter } from 'next/router'

const LaunchDropDescription: FC = () => {

  const loading = false
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
            disabled={defineIfNextDisabled()}
            onClick={() => {
              // setCampaignData(
              //   title,
              //   description,
              //   () => {
                router.push(`/campaigns/new/ERC20/transactions`)
              //   }
              // )
            }}
          >
            Next
          </Button>

          <Button
            to={`/campaigns/new/ERC20/token-data`}
          >
            Back
          </Button>
        </ButtonsContainer>

      </LaunchWidget>
    </LaunchContainer>
  </Page>
}

export default LaunchDropDescription
