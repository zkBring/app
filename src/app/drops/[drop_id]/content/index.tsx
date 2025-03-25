'use client'

import {
  LinkStyled,
  StatsStyled,
  Container
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
  DialogVerification
} from './components'
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

const Content: FC<TProps> = ({
  drop,
  tokenData
}) => {
  const [
    verificationStart,
    setVerificationStart
  ] = useState<boolean>(false)

  useEffect(() => {

  }, [])
  const {
    title,
    address,
    expiration,
    amount,
    token,
    description,
    maxClaims,
    zkPassAppId,
    zkPassSchemaId
  } = drop
  const {
    decimals,
    symbol
  } = tokenData
  
// encrypted_multiscan_qr_enc_code: "GMqe7zrdsrNp"
// encrypted_multiscan_qr_secret: "3rf9bbAuiHyF"

  // const link = `/verify/${encrypted_multiscan_qr_secret}/${encrypted_multiscan_qr_enc_code}`

  const amountFormatted = ethers.formatUnits(amount, decimals)
  return <Page>
    {verificationStart && <DialogVerification onClose={() => {
      setVerificationStart(false)
    }} />}
    <Container>
      <DropDescription
        title={title}
        description={description}
      />

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
        disabled={true}
        amount={String(amountFormatted) || '0'}
        symbol={symbol}
      />

    {/* Go to check verification <LinkStyled href={link}>here</LinkStyled> */}
    </Container>
  </Page>
}


export default Content
