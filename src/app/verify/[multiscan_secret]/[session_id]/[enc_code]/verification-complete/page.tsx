'use server'
import { FC } from 'react'
import {
  Container
} from './styled-components'
import { getDispenserClaimLink } from '@/utils'
import Content from './content'
async function VerificationComplete ({
  params
}: {
  params: {
    multiscan_secret: string,
    enc_code: string
  }
}) {
  const data = await getDispenserClaimLink(
    params.multiscan_secret,
    params.enc_code
  )
  return <Container>
    <Content {...data} />
  </Container>
}

export default VerificationComplete