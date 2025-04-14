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
  drop
}) => {

  const {
    verify: {
      verified
    }
  } = useAppSelector(state => ({
    verify: state.verify
  }))

  const Icon = defineAudiencePreviewIcon(drop.zkPassSchemaId)
  const configForZKTLS = ZKTLSConfig[environment as TEnvironment]
  const schema = configForZKTLS.schemas.find(schema => schema.schemaId === toUtf8String(drop.zkPassSchemaId))

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
            console.log({ drop })
            const claimed = drop.hasConnectedUserClaimed
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