import { FC } from 'react'
import {
  ConnectWalletStyled,
  ButtonContainer,
  DisabledOverlay
} from './styled-components'
import TProps from './types'

const ConnectButton: FC<TProps> = ({
  children,
  size = 'default',
  appearance = 'action',
  disabled,
  onConnect
}) => {
  return <ButtonContainer>
    {disabled && <DisabledOverlay />}
    <ConnectWalletStyled
      size={size}
      disabled={disabled}
      text={children || 'Connect wallet'}
      appearance={appearance}
      onConnect={onConnect}
    />
  </ButtonContainer>
}

export default ConnectButton