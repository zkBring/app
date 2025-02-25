'use client'

import ErrorScreen from "./error"
import LinkReady from "./link-ready"
import { FC } from 'react'
import TProps from './types'
import { TDispenserError } from "@/types"

const defineContent = (
  error: TDispenserError | null, 
  claimLink: string | null,
  errorText?: string | null,
  
) => {

  if (claimLink) {
    return <LinkReady
    claimLink={claimLink}
    />
  }

  return <ErrorScreen
      error={error}
      errorText={errorText}
    />
}

const Content: FC<TProps> = ({
  claimLink,
  error,
  errorText
}) => {

  const content = defineContent(
    error,
    claimLink,
    errorText
  )
  return content
}

export default Content