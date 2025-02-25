import {
  dispenser
} from '@/app/api'
import axios from 'axios'
import {
  TProviderType,
  TDispenserError
} from '../types'

import { getTokenERC20Data } from '.'
import { ethers } from 'ethers'

type TGetDispenserData = (
  multiscanQRId: string
) => Promise<{
  reclaimVerificationURL: string | null,
  tokenAmount: string | null,
  tokenSymbol: string | null,
  providerType: TProviderType | null,
  tokenImage: string | null,
  error: TDispenserError | null,
  decimals: null | number
}> 

const getDispenserData: TGetDispenserData = async (
  multiscanSecret
) => {
  try {

    const linkKey = ethers.id(multiscanSecret)
    const qrKeysPair = new ethers.Wallet(linkKey)
    const MULTISCAN_QR_ID = qrKeysPair.address.toLowerCase()
  
    const { data } = await dispenser.get(
      MULTISCAN_QR_ID
    )

    const {
      reclaimVerificationURL,
      campaign
    } = data

    console.log({ campaign })

    const tokenData = await getTokenERC20Data(
      campaign.token_address,
      Number(campaign.chain_id)
    )

    return {
      reclaimVerificationURL,
      tokenAmount: campaign.token_amount,
      tokenSymbol: tokenData.symbol,
      providerType: campaign.provider_type as TProviderType || 'instagram',
      tokenImage: tokenData.image || null,
      error: null,
      decimals: tokenData.decimals
    }
    
  } catch (err: any) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!', { err })
    const result = {
      reclaimVerificationURL: null,
      tokenAmount: null,
      tokenSymbol: null,
      providerType: null,
      tokenImage: null,
      decimals: null
    }
  
    if (axios.isAxiosError(err)) {
      if (err.message === 'Network Error') {
        if (!window.navigator.onLine) {
          return {
            ...result,
            error: 'qr_no_connection'
          }
        } else {
          return {
            ...result,
            error: 'qr_error'
          }
        }
      } else if (err.response?.status === 404) {
        return {
          ...result,
          error: 'qr_not_found'
        }
      } else if (err.response?.status === 500) {
        return {
          ...result,
          error: 'qr_error'
        }
      } else if (err.response?.status === 403) {

        const { data } = err.response

        if (data.error.includes("Claim is over.")) {
          return {
            ...result,
            error: 'qr_campaign_finished'
          }
        } else if (data.error.includes("Claim has not started yet.")) {
          return {
            ...result,
            error: 'qr_campaign_not_started'
          }
        } else if (data.error.includes("No more claims available.")) {
          return {
            ...result,
            error: 'qr_no_links_to_share'
          }
        } else if (data.error.includes("Dispenser is not active")) {
          return {
            ...result,
            error: 'qr_campaign_not_active'
          }
        } else if (data.errors.includes("RECEIVER_NOT_WHITELISTED")) {
          return {
            ...result,
            error: 'qr_campaign_not_eligible'
          }
        } else {
          return {
            ...result,
            error: 'qr_error'
          }
        }
      } else {
        return {
          ...result,
          error: 'qr_error'
        }
      }
    } else {
      if (err && err.code === "INVALID_ARGUMENT") {
        return {
          ...result,
          error: 'qr_incorrect_parameter'
        }
      }
      return {
        ...result,
        error: 'qr_error'
      }
    }
    console.error(err)
  }
}


export default  getDispenserData