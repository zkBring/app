'use client'
import {
  FC
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  ButtonStyled,
  Container
} from './styled-components'
import {
  StepTitle
} from '../../styled-components'
import TProps from './types'
import {
  Drop
} from 'zkbring-sdk'
import { useAppSelector } from '@/lib/hooks'
import { TWebproof } from '@/types'

const claim = async (
  dropInstance: Drop | null,
  webproof: TWebproof | null,
  ephemeralKey?: string | null,
  recipient?: string | null
) => {
  
  if (!dropInstance) {
    alert('Drop is not ready')
  }

  if (!webproof) {
    alert('webproof is not ready')
  }

  if (!ephemeralKey) {
    alert('ephemeralKey is not ready')
  }

  if (!recipient) {
    return alert('Please connect wallet')
  }

  const { txHash } = await (dropInstance as Drop).claim({
    webproof: webproof as TWebproof,
    recipient,
    ephemeralKey: ephemeralKey as string
  })

  alert(`CLAIMED: ${txHash}`)
}

const Claim: FC<TProps> = ({
  symbol,
  amount,
  dropInstance,
  recipient
}) => {

  const {
    verify: {
      webproof,
      ephemeralKey,
      verified
    }
  } = useAppSelector(state => ({
    verify: state.verify
  }))

  return <Container disabled={!verified}>
    <StepTitle>
      2. Claim drop
    </StepTitle>
    <WidgetStyled
      title={`${amount} ${symbol}`}
    >
      <TextStyled>
        You’re eligible! Claim your tokens now!
      </TextStyled>
      <ButtonStyled
        appearance='additional'
        size='extra-small'
        disabled={!verified}
        onClick={() => {
          claim(
            dropInstance,
            webproof,
            ephemeralKey,
            recipient
          )
        }}
      >
        Claim
      </ButtonStyled>
    </WidgetStyled>
  </Container>
}

export default Claim