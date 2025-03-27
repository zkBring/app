import { FC } from 'react'
import {
  ConnectWalletStyled
} from './styled-components'
import TProps from './types'

const ConnectButton: FC<TProps> = ({
  children,
  size = 'default'
}) => {
  return <ConnectWalletStyled
    size={size}
  >
    {children || 'Connect wallet'}
  </ConnectWalletStyled>
}

export default ConnectButton