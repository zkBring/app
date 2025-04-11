'use client'

import {
  LinkStyled,
  StatsStyled,
  Container,
  IconedButton
} from './styled-components'
import { ethers } from 'ethers'
import {
  Page
} from '@/components/common'
import {
  ClaimsCounter,
  DropDescription,
  Verify,
  Claim,
  DialogVerification,
  DialogTransgateNotAvailable,
  Share
} from './components'
import {
  InputPenIcon
} from '@/components/icons'
import {
  useEffect,
  FC,
  useState
} from 'react'
import TProps from './types'
import {
  SmallCoinIcon,
  ProfileIcon
} from '@/components/icons'
import {
  shortenString
} from '@/utils'
import { Drop } from 'zkbring-sdk'
import TransgateConnect from "@zkpass/transgate-js-sdk"
import {
  createSDK,
  defineJSONRPC
} from '@/utils'
import {
  useAppSelector
} from '@/lib/hooks'
import {
  setTxHash,
  setClaimed,
  setVerified
} from '@/lib/slices'
import { useDispatch } from 'react-redux'
import isMobile from 'is-mobile'
import { useRouter } from 'next/navigation'

const Content: FC<TProps> = ({
  drop
}) => {
  const router = useRouter()

  const [ dropInstance, setDropInstance ] = useState<Drop | null>(null)
  const dispatch = useDispatch()
  const {
    user: {
      address: userAddress,
      signer
    },
    verify: {
      verified
    }
  } = useAppSelector(state => ({
    user: state.user,
    verify: state.verify
  }))

  useEffect(() => {
    dispatch(setClaimed(false))
    dispatch(setVerified(false))
    dispatch(setTxHash(null))
  }, [])

  useEffect(() => {

    const init = async () => {
      const sdk = createSDK({
        transgateModule: TransgateConnect,
        signer: signer || undefined
      })

      const dropInstance = await sdk.getDrop(drop.address)
      setDropInstance(dropInstance)
    }
    init()
  }, [
    signer
  ])

  useEffect(() => {
    if (!verified || !signer) { return }
    const init = async () => {

      console.log('updateWalletOrProvider');
      (dropInstance as Drop).updateWalletOrProvider(signer)
    }

    init()
  }, [
    verified,
    signer
  ])

  useEffect(() => {
    if (!dropInstance) {
      return
    }
    const init = async () => {
      const isClaimed = dropInstance.hasConnectedUserClaimed
      if (isClaimed) {
        dispatch(setClaimed(true))
        dispatch(setVerified(true))
        const txHash = dropInstance.connectedUserClaimTxHash
        console.log({ txHash })

        if (txHash) {
          dispatch(setTxHash(txHash))
        }
      }
    }

    init()
  }, [
    dropInstance
  ])


  const [
    verificationStart,
    setVerificationStart
  ] = useState<boolean>(false)

  const [
    installTransgateDialog,
    setInstallTransgateDialog
  ] = useState<boolean>(false)

  const {
    title,
    address,
    amount,
    description,
    maxClaims,
    decimals,
    symbol,
    claimsCount,
    creatorAddress
  } = drop
  
// encrypted_multiscan_qr_enc_code: "GMqe7zrdsrNp"
// encrypted_multiscan_qr_secret: "3rf9bbAuiHyF"

  // const link = `/verify/${encrypted_multiscan_qr_secret}/${encrypted_multiscan_qr_enc_code}`

  const amountFormatted = ethers.formatUnits(amount, decimals)
  return <Page
    preventSwitchNetworkRedirect
  >
    {verificationStart &&
      <DialogVerification
        dropInstance={dropInstance}
        onClose={() => {
          setVerificationStart(false)
        }}
        setClaimIsReady={() => {
          setVerificationStart(false);
          (dropInstance as Drop).updateWalletOrProvider(signer)
        }}

        showTransgateDialog={() => {
          setVerificationStart(false)
          setInstallTransgateDialog(true)
        }}
      />
    }
    {installTransgateDialog && <DialogTransgateNotAvailable
       onClose={() => {
        setInstallTransgateDialog(false)
      }}
    />}
    <Container>
      <DropDescription
        title={`Claim ${symbol}`}
        description={description}
      />

      <Share />

      {userAddress && (userAddress.toLowerCase() === drop.creatorAddress.toLowerCase()) && <IconedButton size='small' to={`/drops/${address}/edit`}>
        <InputPenIcon />Edit drop
      </IconedButton>}

      <StatsStyled
        stats={[
          {
            title: 'Drop amount',
            value: `${amountFormatted || '0'} ${symbol}`,
            icon: <SmallCoinIcon />
          },
          {
            title: 'Drop claims',
            value: String(claimsCount),
            limit: String(maxClaims),
            icon: <ProfileIcon />
          },
          {
            title: 'Created by',
            // value: shortenString(creator_address as string),
            value: shortenString(creatorAddress)
          }
        ]}
      />

      <ClaimsCounter
        claimAmount={amount.toString()}
        alreadyClaimed={String(claimsCount)}
        limit={String(maxClaims)}
        symbol={symbol}
        decimals={decimals}
      />

      <Verify
        dropInstance={dropInstance}
        onStart={() => {

          if (isMobile()) {
            router.push('/wrong-device')
            return
          }
          setVerificationStart(true)
        }}
      />

      <Claim
        dropInstance={dropInstance}
        amount={String(amountFormatted) || '0'}
        symbol={symbol}
        recipient={userAddress}
      />

    </Container>
  </Page>
}


export default Content
