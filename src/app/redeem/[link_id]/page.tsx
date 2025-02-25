'use server'
import {
  LinkdropSDK,
  NotFoundError,
  ForbiddenError,
  ValidationError,
  ConflictError,
  ClaimLink
} from 'linkdrop-sdk'
import randomBytes from 'randombytes'
import { sdkApiKey } from '@/app/configs/index'
import {
  getTokenERC20Data,
  getTokenERC721Data,
  getTokenERC1155Data,
  generateMetadataUtil
} from '@/utils'
import Content from './content'
import {
  headers
} from 'next/headers'
import {
  TTokenStandard,
  TTokenData,
  TWalletName
} from '@/types'
import type { Metadata } from 'next'
import { cache } from 'react'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getInitialData()

  if (!data || data === null) {
    return generateMetadataUtil({
      description: 'You have received a digital asset. Click to claim it',
      image: '/meta-image.png'
    })
  }

  const {
    tokenData,
    error
  } = data

  if (error) {
    if (error === 404) {
      return generateMetadataUtil({
        description: 'Error 404',
        image: '/meta-image.png'
      })
    }
  }

  return generateMetadataUtil({
    description: `You have received ${(tokenData as TTokenData || {}).symbol}. Click to claim it`,
    image: (tokenData as TTokenData || {}).image
  })
}


const getInitialData = cache(async () => {
  try {
    const headersDefined = await headers()
    const pathname = headersDefined.get("x-current-path")
    const base = `${(headersDefined).get('x-forwarded-proto')}://${(headersDefined).get('host')}`
    const getRandomBytes = (length: number) => new Uint8Array(randomBytes(length))

    const sdk = new LinkdropSDK({
      apiKey: sdkApiKey,
      baseUrl: base,
      getRandomBytes
    })
    const claimLink = await sdk.getClaimLink(pathname as string)
    if (claimLink instanceof ClaimLink) {
      const {
        tokenId,
        amount,
        token,
        chainId,
        tokenType,
        expiration,
        transferId,
        wallet,
        claimingFinishedDescription,
        claimingFinishedAutoRedirect,
        claimingFinishedButtonOn,
        claimingFinishedButtonTitle,
        claimingFinishedButtonURL,
        preferredWalletOn,
        additionalWalletsOn,
        weiAmount,
        tokenImage,
        tokenName
      } = claimLink

      const linkParams = {
        token_id: tokenId,
        amount: amount,
        token_address: token,
        chain_id: chainId,
        token_standard: tokenType,
        expiration_time: expiration,
        transfer_id: transferId,
        wallet: wallet as (null | TWalletName),
        claiming_finished_description: claimingFinishedDescription,
        claiming_finished_button_title: claimingFinishedButtonTitle,
        claiming_finished_button_url: claimingFinishedButtonURL,
        claiming_finished_button_on: claimingFinishedButtonOn,
        claiming_finished_auto_redirect: claimingFinishedAutoRedirect,
        preferred_wallet_on: preferredWalletOn,
        additional_wallets_on: additionalWalletsOn,
        wei_amount: weiAmount
      }

      const tokenData = await getTokenData(
        tokenType,
        Number(chainId),
        token,
        tokenId,
        tokenName,
        tokenImage
      )
      const status = await claimLink.getStatus()
      console.log({
        status
      })
      return {
        linkParams,
        status: status,
        tokenData,
        error: null
      }
    }
    return null
  } catch (err: unknown) {

    if (
      err instanceof NotFoundError ||
      err instanceof ConflictError ||
      err instanceof ForbiddenError ||
      err instanceof ConflictError ||
      err instanceof ValidationError
    ) {

      return {
        error: err.code
      }
    } else {
      return {
        error: 500
      }
    }
  }
})

const getTokenData = async (
  tokenStandard: TTokenStandard,
  chainId: number,
  tokenAddress: string,
  tokenId?: string,
  tokenName?: string | null,
  tokenImage?: string | null
) => {
  if (tokenStandard === 'ERC1155') {
    return await getTokenERC1155Data(
      tokenAddress,
      chainId,
      tokenId as string,

      // available only for SBT tokens created on dashboard
      tokenName,
      tokenImage
    )
  }

  if (tokenStandard === 'ERC721') {
    return await getTokenERC721Data(
      tokenAddress,
      chainId,
      tokenId as string
    )
  }

  return await getTokenERC20Data(
    tokenAddress,
    chainId
  )

}


export default async function Redeem() {
  const data = await getInitialData()

  if (!data || data === null) {
    return <h1>
      Some error occured. Cannot get data
    </h1>
  }

  const {
    linkParams,
    status,
    tokenData,
    error
  } = data

  return <Content
    error={error}
    linkParams={linkParams}
    tokenData={tokenData}
    status={status?.status}
  />
}

