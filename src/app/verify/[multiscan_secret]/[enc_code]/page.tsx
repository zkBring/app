'use server'
import Content from './content'
import {
  getDispenserData
} from '@/utils'
import { use } from "react"

type tParams = Promise<{
  multiscan_secret: string,
  enc_code: string
}>


async function Verify ({
  params
}: {
  params: tParams
}) {
  const paramsData = use(params)

  const dispenserData  = await getDispenserData(
    paramsData.multiscan_secret,
    paramsData.enc_code
  )

  if (dispenserData) {
    return <Content
      {...dispenserData}
    />
  }

  return <h1>Error</h1>

}

export default Verify
