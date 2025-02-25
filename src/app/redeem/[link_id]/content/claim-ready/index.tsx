'use client'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { TProps } from './types'
import { FC, useState } from 'react'
import {
  Container,
  TitleStyled,
  SubtitleStyled
} from './styled-components'
import { TClaimErrorType } from '@/types'
import {
  Button,
  TokenPreview
} from '@/components/common'
import randomBytes from 'randombytes'
import { sdkApiKey } from '@/app/configs/index'
import {
  setLinkTxHash,
  setLinkLoading
} from '@/lib/slices'
import { shortenString } from '@/utils'
import ClaimPopup from './claim-popup'
import {
  LinkdropSDK,
  ForbiddenError
} from 'linkdrop-sdk'

const redeem = async (
  destination: string,
  callback: (txHash: string) => void,
  errorCallback: (
    errorType?: TClaimErrorType
  ) => void
) => {
  try {
    const getRandomBytes = (length: number) => new Uint8Array(randomBytes(length)) 
    const sdk = new LinkdropSDK({
      apiKey: sdkApiKey,
      baseUrl: window.location.host,
      getRandomBytes
    })
    const link = await sdk.getClaimLink(window.location.href)
    if (link) {
      const txHash = await link.redeem(destination)
      callback(txHash)
    }
  } catch (err) {
    if (err instanceof ForbiddenError) {
      errorCallback(err.error as (TClaimErrorType | undefined))
    }
    console.log({ err })
  }
}

const ClaimReady: FC<TProps> = ({
  linkParams,
  tokenData,
  setScreen
}) => {
  const {
    user: {
      address
    },
    link: {
      loading
    }
  } = useAppSelector(state => ({
    user: state.user,
    link: state.link
  }))

  const [
    showClaimPopup,
    setShowClaimPopup
  ] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  return <Container>
    {showClaimPopup && <ClaimPopup
      chainId={linkParams.chain_id as number}
      onClose={() => setShowClaimPopup(false)}
      setScreen={setScreen}
    />}
    <TokenPreview
      src={tokenData.image as string}
      name={tokenData.symbol}
      tokenStandard={tokenData.standard}
      amount={linkParams.amount}
      decimals={tokenData.decimals}
      claimed={false}
    />
    <TitleStyled>Claim {tokenData.symbol}</TitleStyled>
    <SubtitleStyled>
      Please proceed to receive tokens to: {shortenString(address as string)}
    </SubtitleStyled>
    <Button
      appearance='action'
      loading={loading}
      onClick={() => {
        dispatch(setLinkLoading(true))
        redeem(
          address as string,
          (txHash: string) => {
            dispatch(setLinkTxHash(txHash))
            setShowClaimPopup(true)
            dispatch(setLinkLoading(false))
          },
          (
            errorType?: TClaimErrorType
          ) => {
            dispatch(setLinkLoading(false))
            if (errorType === 'MULTIPLE_CLAIMS_FORBIDDEN') {
              return setScreen('multiple_claims_forbidden_error')
            }
            setScreen('server_error')
          }
        )
      }}
    >
      Claim
    </Button>
  </Container>
}

export default ClaimReady
