import { FC } from 'react'
import {
  ConnectWalletStyled
} from './styled-components'
import Button from '../button'
import TProps from './types'

const ConnectButton: FC<TProps> = ({
  children,
  size = 'default',
  appearance = 'action',
  disabled,
  onConnect
}) => {
  if (disabled) {
    return <Button
      appearance={appearance}
      disabled
      size={size}
    >
      {children || 'Connect wallet'}
    </Button>
  }
  return <ConnectWalletStyled
    size={size}
    disabled={disabled}
    text={children || 'Connect wallet'}
    appearance={appearance}
    onConnect={onConnect}
  />
}

export default ConnectButton