'use server'

import { getDispenserClaimLink } from '@/utils'
import Content from './content'

async function VerificationComplete ({
  params
}: {
  params: Promise<{
    session_id: string,
    multiscan_secret: string,
    enc_code: string
  }>
}) {
  const paramsData = await params
  const data = await getDispenserClaimLink(
    paramsData.multiscan_secret,
    paramsData.session_id,
    paramsData.enc_code
  )

  if (data) {
    return  <Content {...data} />
  }


}

export default VerificationComplete