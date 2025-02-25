'use client'
import { Input }  from '@/components/common'

import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  Container,
  Title
} from './styled-components'
import { useRouter } from 'next/navigation'

import { TDrop } from './types'

const Drop: FC<TDrop> = ({
  title,
  campaignId
}) => {
  const router = useRouter()

  return <Container>
    <Title>
      {title}
      <button onClick={() => {
        router.push(`/drops/${campaignId}`)
      }}>
        go
      </button>
    </Title>
  </Container>
}

export default Drop
