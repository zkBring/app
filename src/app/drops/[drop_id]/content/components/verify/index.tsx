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

  return <Container disabled={verified}>
    <StepTitle>
      1. Verify Eligibility
    </StepTitle>
    <WidgetStyled
      title='Users who follow @zkBring'
      finished={verified}
      image={<XIconStyled />}
    >
      {!verified && <>
        <TextStyled>
          We use zkPass with zkTLS Webproof technology to verify your eligibility without accessing your credentials or personal data.
        </TextStyled>
        <ButtonStyled
          disabled={verified}
          appearance='action'
          size='extra-small'
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