'use client'
import {
  FC
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  ButtonStyled,
  Container,
  SmallTextStyled,
  LinkStyled,
  LockIconStyled,
  XIconStyled
} from './styled-components'
import {
  defineAudiencePreviewIcon
} from '@/utils'
import ZKTLSConfig from '@/app/configs/zk-tls'
import {
  environment
} from '@/app/configs/index'
import { TEnvironment } from '@/types'
import { toUtf8String } from 'ethers'
import {
  StepTitle
} from '../../styled-components'
import TProps from './types'
import { useAppSelector } from '@/lib/hooks'

const Verify: FC<TProps> = ({
  onStart,
  dropInstance
}) => {

  const {
    verify: {
      verified
    }
  } = useAppSelector(state => ({
    verify: state.verify
  }))

  if(!dropInstance) {
    return null
  }

  const Icon = defineAudiencePreviewIcon(dropInstance.zkPassSchemaId)
  const configForZKTLS = ZKTLSConfig[environment as TEnvironment]
  const schema = configForZKTLS.schemas.find(schema => schema.schemaId === toUtf8String(dropInstance.zkPassSchemaId))

  return <Container disabled={verified}>
    <StepTitle>
      1. Verify Eligibility
    </StepTitle>
    <WidgetStyled
      title={schema?.description || 'Verify your account'}
      finished={verified}
      image={Icon}
    >
      {!verified && <>
        <TextStyled>
          We use zkPass with zkTLS Webproof technology to verify your eligibility without accessing your credentials or personal data.
        </TextStyled>
        <ButtonStyled
          disabled={verified}
          appearance='action'
          size='small'
          onClick={async () => {
            if (!dropInstance) {
              return alert('Connect your wallet first')
            }
            const claimed = dropInstance.hasConnectedUserClaimed
            if (claimed) {
              return alert('Already claimed by current user')
            }
            onStart()
          }}
        >
          Verify with zkTLS
        </ButtonStyled>

        <SmallTextStyled>
          <LockIconStyled />Your data remains private with zkTLS Webproof. <LinkStyled href="#">Learn more</LinkStyled>
        </SmallTextStyled>
      </>}
    </WidgetStyled>
  </Container>
}

export default Verify