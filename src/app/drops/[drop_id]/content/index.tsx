'use client'


import {
  Container,
} from '../../styled-components'
import {
  LinkStyled
} from './styled-components'
import { ThemeProvider } from 'styled-components'
import { dark } from '@/themes'
import {
  Header,
  Footer
} from '@/components/common'
import { useEffect, FC } from 'react'
import TProps from './types'

const Content: FC<TProps> = ({
  drop
}) => {

  useEffect(() => {

  }, [])
  console.log({
    drop
  })
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
    encrypted_multiscan_qr_secret
  } = drop
  console.log({ drop })
// encrypted_multiscan_qr_enc_code: "GMqe7zrdsrNp"
// encrypted_multiscan_qr_secret: "3rf9bbAuiHyF"

  const link = `/verify/${encrypted_multiscan_qr_secret}/${encrypted_multiscan_qr_enc_code}`
  return <ThemeProvider theme={dark}>
    <Header />
    <Container>
    title {title} <br />
    campaign_id {campaign_id} <br />
    expiration_time {expiration_time} <br />
    symbol {symbol} <br />
    token_amount {token_amount}<br />
    token_standard {token_standard}<br />

    creator_address {creator_address}<br />
    token_address {token_address}<br />
    
    Go to check verification <LinkStyled href={link}>here</LinkStyled>
    </Container>
    <Footer />
  </ThemeProvider>
}


export default Content
