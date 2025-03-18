'use client'

import {
  LinkStyled,
  StatsStyled,
  Container
} from './styled-components'
import { ThemeProvider } from 'styled-components'
import { dark } from '@/themes'
import {
  Page
} from '@/components/common'
import {
  ClaimsCounter,
  DropDescription,
  Verify,
  Claim
} from './components'
import {
  useEffect,
  FC
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
  drop
}) => {

  useEffect(() => {

  }, [])
  const {
    title,
    campaign_id,
    expiration_time,
    symbol,
    token_amount,
    token_standard,
    creator_address,
    token_address,
    encrypted_multiscan_qr_enc_code,
    encrypted_multiscan_qr_secret,
    description,
    claims_count,
    tokens_per_claim
  } = drop
  console.log({ drop })
  
// encrypted_multiscan_qr_enc_code: "GMqe7zrdsrNp"
// encrypted_multiscan_qr_secret: "3rf9bbAuiHyF"

  const link = `/verify/${encrypted_multiscan_qr_secret}/${encrypted_multiscan_qr_enc_code}`
  return <Page>
    <Container>
      <DropDescription
        title={title}
        description={description}
      />

      <StatsStyled
        stats={[
          {
            title: 'Drop amount',
            value: `${tokens_per_claim || '0'} ${symbol}`,
            icon: <SmallCoinIcon />
          },
          {
            title: 'Drop claims',
            value: claims_count || '0',
            limit: '1000',
            icon: <ProfileIcon />
          },
          {
            title: 'Created by',
            value: shortenString(creator_address as string),
          }
        ]}
      />

      <ClaimsCounter
        value='7250000'
        limit='10000000'
        symbol={symbol}
      />

      <Verify />

      <Claim
        disabled={true}
        amount={tokens_per_claim || '0'}
        symbol={symbol as string}
      />

    
    Go to check verification <LinkStyled href={link}>here</LinkStyled>
    </Container>
  </Page>
}


export default Content
