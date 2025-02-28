import {
  dispenser
} from '@/app/api'
import axios from 'axios'
import {
  TDispenserError
} from '../types'
import * as wccrypto from '@walletconnect/utils/dist/esm'
import { ethers } from 'ethers'

type TGetDispenserClaimLink = (
  multiscanSecret: string,
  sessionId: string,
  multiscanQREncCode: string
) => Promise<{
  claimLink: string | null,
  error: TDispenserError | null,
  errorText?: string 
}>

const getDispenserClaimLink: TGetDispenserClaimLink = async (
  multiscanSecret,
  sessionId,
  multiscanQREncCode
) => {
  try {

    const linkKey = ethers.id(multiscanSecret)
    const qrKeysPair = new ethers.Wallet(linkKey)
    const multiscanQRId = qrKeysPair.address.toLowerCase()
  
    const { data } = await dispenser.popLink(
      multiscanQRId,
      sessionId
    )

    const { encrypted_claim_link, success }: { encrypted_claim_link: string, success: boolean } = data
    if (success && encrypted_claim_link) {
      const decryptKey = ethers.id(multiscanQREncCode)
      const linkDecrypted = wccrypto.decrypt({ encoded: encrypted_claim_link, symKey: decryptKey.replace('0x', '') })
      return {
        claimLink: linkDecrypted,
        error: null
      }
    }

    return {
      claimLink: null,
      error: 'qr_error'
    }
  
    
  } catch (err: any) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!', { err })
    const result = {
      claimLink: null
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
        const { data } = err.response
        if (data.errors.includes("REACLAIM_VERIFICATION_NOT_EXISTS")) {
          return {
            ...result,
            error: 'qr_proof_verification_failed',
            errorMessage:  data.error as string

          }
        } else {
          return {
            ...result,
            error: 'qr_no_connection',
            errorMessage:  data.error as string

          }
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
        } else if (data.errors.includes("USER_ALREADY_CLAIMED")) {
          return {
            ...result,
            error: 'qr_already_claimed'
          }
        } else if (data.error.includes("Claim has not started yet.")) {
          return {
            ...result,
            error: 'qr_campaign_not_started'
          }
        } else if (data.error.includes("No more claims available.")) {
          return {
            ...result,
            error: 'qr_no_links_to_share',
            errorMessage:  data.error as string
          }
          
        } else if (data.error.includes("Dispenser is not active")) {
          return {
            ...result,
            error: 'qr_campaign_not_active',
            errorMessage:  data.error as string

          }
        } else if (data.errors.includes("RECEIVER_NOT_WHITELISTED")) {
          return {
            ...result,
            error: 'qr_campaign_not_eligible',
            errorMessage:  data.error as string

          }
        } else if (
          data.errors.includes("RECLAIM_VERIFICATION_PENDING") ||
          data.errors.includes("USER_SHOULD_FOLLOW_TO_CLAIM") ||
          data.errors.includes("USER_SHOULD_FOLLOW_CORRECT_ACCOUNT") ||
          data.errors.includes("USER_ALREADY_CLAIMED")
        ) {
          return {
            ...result,
            error: 'qr_proof_verification_failed',
            errorMessage:  data.error as string
          }
        } else {
          return {
            ...result,
            error: 'qr_error',
            errorMessage:  data.error as string
          }
        }
      }
      return {
        ...result,
        error: 'qr_error'
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


export default  getDispenserClaimLink
