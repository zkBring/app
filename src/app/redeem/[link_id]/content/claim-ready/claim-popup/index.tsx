'use client'
import {
  FC,
  useState,
  useEffect
} from 'react'
import {
  Popup,
  ExplorerButton
} from '@/components/common'
import {
  CheckIcon
} from '@/components/icons'
import {
  useAppSelector
} from '@/lib/hooks'
import {
  TitleStyled,
  SubtitleStyled,
  LoaderContainer,
  Done,
  LoaderStyled,
  Content
} from './styled-components'
import { TProps } from './types'
import randomBytes from 'randombytes'
import { sdkApiKey } from '@/app/configs/index'
import {
  LinkdropSDK
} from 'linkdrop-sdk'
import {
  checkRedeemStatus
} from '@/utils'

const checkIfClaimed = async (
  optimisticClaimUI: boolean,
  txHash: string,
  chainId: number,
  successCallback: () => void,
  errorCallback: () => void
) => {
  try {
    const getRandomBytes = (length: number) => new Uint8Array(randomBytes(length)) 
    const sdk = new LinkdropSDK({
      apiKey: sdkApiKey,
      baseUrl: window.location.origin,
      getRandomBytes
    })
    const claimLink = await sdk.getClaimLink(window.location.href)
    if (claimLink) {
      await checkRedeemStatus(
        claimLink,
        txHash,
        chainId,
        optimisticClaimUI
      )
      successCallback()
    }

  } catch (err) {
    console.log({ err })
    errorCallback()
  }
}

const defineTitle = (
  claimed: boolean
) => {
  if (!claimed) return 'Claiming...'
  return 'Claimed'
}

const defineLoader = (
  claimed: boolean
) => {
  if (!claimed) return <LoaderStyled size='large' />
  return <Done>
    <CheckIcon />
  </Done>
}


const ClaimPopup:FC<TProps> = ({
  setScreen,
  onClose,
  chainId
}) => {

  const [ claimed, setClaimed ] = useState<boolean>(false)

  const {
    link: {
      tx_hash,
      optimistic_claim_ui
    }
  } = useAppSelector(state => ({
    link: state.link,
    token: state.token
  }))

  useEffect(() => {
    if (!tx_hash) return

    checkIfClaimed(
      optimistic_claim_ui,
      tx_hash,
      chainId,
      () => setClaimed(true),
      () => {
        setScreen('transaction_error')
      }
    )
  }, [tx_hash])

  useEffect(() => {
    if (!claimed) { return }
    const timeout = window.setTimeout(() => {
      setScreen('claim_finished')
    }, 1500)

    return () => window.clearTimeout(timeout)
  }, [claimed])

  return <Popup
    onClose={onClose}
  >
    <Content>
      <LoaderContainer>
        {defineLoader(claimed)}
      </LoaderContainer>
      <TitleStyled>
        {defineTitle(claimed)}
      </TitleStyled>
      <SubtitleStyled>
        The transaction is being processed, and your token will show up soon. Feel free to continue exploring!
      </SubtitleStyled>
      <ExplorerButton
        chainId={chainId}
        hash={tx_hash}
      />
    </Content>
    
  </Popup>
}

export default ClaimPopup