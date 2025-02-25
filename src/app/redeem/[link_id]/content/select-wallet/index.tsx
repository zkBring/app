'use client'
import {
  FC,
  useState,
  useEffect
} from 'react'
import {
  Container,
  TitleStyled,
  ImageStyled,
  SubtitleStyled,
  ButtonStyled
} from './styled-components'
import {
  useAppDispatch
} from '@/lib/hooks'
import {
  setUserAddress,
  setUserChainId
} from '@/lib/slices'
import {
  TProps
} from './types'
import {
  LinkButton
} from '@/components/common'
import { useAppKit } from '@reown/appkit/react'
import { useAccount, useDisconnect } from "wagmi"
import WalletImage from '@/images/wallet.png'
import AddressPopup from './address-popup'

const SelectWallet: FC<TProps> = ({
  setScreen
}) => {
  const dispatch = useAppDispatch()
  const { open } = useAppKit()
  const { address, isConnected, chain } = useAccount()
  const { disconnect } = useDisconnect()
  const [
    manualAddressPopup,
    setManualAddressPopup
  ] = useState(false)

  useEffect(() => {
    if (!address) { return }

    dispatch(setUserAddress(address))
    dispatch(setUserChainId(chain?.id || null))
    setScreen('claim_ready')
  }, [address, chain])

  return <Container>
    {manualAddressPopup && <AddressPopup setScreen={setScreen} onClose={() => setManualAddressPopup(false)} />}
    <ImageStyled
      height={140}
      width={140}
      alt='Choose wallet'
      src={WalletImage}
    />
    <TitleStyled>
      Choose wallet
    </TitleStyled>
    <SubtitleStyled>
      Select an existing crypto wallet or create a new one to proceed with your claim
    </SubtitleStyled>

    <ButtonStyled
      appearance='action'
      onClick={() => {
      if (isConnected) {
        disconnect()
      }
      open()
    }}
    >
      Select wallet
    </ButtonStyled>

    <LinkButton
      onClick={() => {
        setManualAddressPopup(true)
      }}
    >
      Claim to ENS or address
    </LinkButton>
    
  </Container>
}

export default SelectWallet