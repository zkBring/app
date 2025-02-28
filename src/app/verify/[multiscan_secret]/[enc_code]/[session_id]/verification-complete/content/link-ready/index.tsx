'use client'

import { FC, useEffect } from 'react'
import { Container } from './styled-components'
import {
  Text
} from '@/components/common'
import TProps from './types'

const LinkReady: FC<TProps> = ({
  claimLink
}) => {

  useEffect(() => {
    if (claimLink) {
      window.open(claimLink, '_blank')
    }
  })
  return <Container>
    <Text>
      You are about to claim tokens. If you are not redirected, click the button below:

      {claimLink}
    </Text>
  </Container>
}

export default LinkReady