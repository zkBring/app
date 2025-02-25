'use server'
import {  } from '@/utils'
import {
  FC
} from 'react'
import Content from './content'
import {
  getDispenserData
} from '@/utils'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

async function Verify ({
  params
}: {
  params: {
    multiscan_secret: string
  }
}) {

  const dispenserData  = await getDispenserData(
    params.multiscan_secret,
  )

  if (dispenserData) {
    return <Content
      {...dispenserData}
    />
  }



  return <h1>Error</h1>

}

export default Verify
