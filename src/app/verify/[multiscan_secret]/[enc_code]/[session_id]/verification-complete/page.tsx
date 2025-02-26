'use server'

import { getDispenserClaimLink } from '@/utils'
import Content from './content'

async function VerificationComplete ({
  params
}: {
  params: Promise<{
    multiscan_secret: string,
    enc_code: string
  }>
}) {
  const paramsData = await params
  const data = await getDispenserClaimLink(
    paramsData.multiscan_secret,
    paramsData.enc_code
  )

  if (data) {
    return  <Content {...data} />
  }


}

export default VerificationComplete