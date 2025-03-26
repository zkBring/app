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
import { Drop } from 'zkbring-sdk'

const claim = async (
  dropInstance: Drop | null,
  webproof: any,
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
    webproof,
    recipient,
    ephemeralKey: ephemeralKey as string
  })

  alert(`CLAIMED: ${txHash}`)
}

const Claim: FC<TProps> = ({
  symbol,
  amount,
  disabled,
  dropInstance,
  webproof,
  ephemeralKey,
  recipient
}) => {
  return <Container disabled={disabled}>
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
        disabled={disabled}
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