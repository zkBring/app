'use client'

import {
  LinkStyled,
  StatsStyled,
  Container,
  IconedButton
} from './styled-components'
import { ThemeProvider } from 'styled-components'
import { dark } from '@/themes'
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
import { useAppSelector } from '@/lib/hooks'

const Content: FC<TProps> = ({
  drop
}) => {

  const [ dropInstance, setDropInstance ] = useState<Drop | null>(null)

  useEffect(() => {
    const init = async () => {
      const sdk = createSDK({
        transgateModule: TransgateConnect
      })
  
      const dropInstance = await sdk.getDrop(drop.address)
      setDropInstance(dropInstance)
    }

    init()
  }, [])


  const [
    verificationStart,
    setVerificationStart
  ] = useState<boolean>(false)

  const [
    installTransgateDialog,
    setInstallTransgateDialog
  ] = useState<boolean>(false)

  const {
    user: {
      address: userAddress,
      signer
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  const {
    title,
    address,
    amount,
    description,
    maxClaims,
    decimals,
    symbol
  } = drop
  
// encrypted_multiscan_qr_enc_code: "GMqe7zrdsrNp"
// encrypted_multiscan_qr_secret: "3rf9bbAuiHyF"

  // const link = `/verify/${encrypted_multiscan_qr_secret}/${encrypted_multiscan_qr_enc_code}`

  const amountFormatted = ethers.formatUnits(amount, decimals)
  return <Page>
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
        title={title}
        description={description}
      />

      <Share />

      {userAddress && <IconedButton size='extra-small' to={`/drops/${address}/edit`}>
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
            value: '0',
            limit: String(maxClaims),
            icon: <ProfileIcon />
          },
          {
            title: 'Created by',
            // value: shortenString(creator_address as string),
            value: 'CREATOR_ADDRESS'
          }
        ]}
      />

      <ClaimsCounter
        value='0'
        limit={String(maxClaims)}
        symbol={symbol}
      />

      <Verify
        onStart={() => {
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
