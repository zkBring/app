import { FC } from 'react'
import {
  ConnectWalletStyled
} from './styled-components'
import TProps from './types'

const ConnectButton: FC<TProps> = ({
  children,
  size = 'default',
  appearance = 'action'
}) => {
  return <ConnectWalletStyled
    size={size}
    appearance={appearance}
  >
    {children || 'Connect wallet'}
  </ConnectWalletStyled>
}

export default ConnectButton