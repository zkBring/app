'use client'
import {
  FC
} from 'react'
import {
  Container
} from './styled-components'
import {
  defineNetworkIcon,
} from '@/utils'
import { TProps } from './types'

const NetworkIndicator: FC<TProps> = ({
  chainId
}) => {
  if (!chainId) {
    return null
  }
  return <Container
    alt="network logo"
    width='16'
    height='16'
    src={defineNetworkIcon(chainId)}
  />
}

export default NetworkIndicator