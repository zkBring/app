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

// encrypted_multiscan_qr_enc_code: "GMqe7zrdsrNp"
// encrypted_multiscan_qr_secret: "3rf9bbAuiHyF"

  const link = '/verify/3rf9bbAuiHyF/GMqe7zrdsrNp'
  return <ThemeProvider theme={dark}>
    <Header />
    <Container>
    title {drop.title} <br />
    campaign_id {drop.campaign_id} <br />
    expiration_time {drop.expiration_time} <br />
    symbol {drop.symbol} <br />
    token_amount {drop.token_amount}<br />
    token_standard {drop.token_standard}<br />

    creator_address {drop.creator_address}<br />
    token_address {drop.token_address}<br />
    
    Go to check verification <LinkStyled href={link}>here</LinkStyled>
    </Container>
    <Footer />
  </ThemeProvider>
}


export default Content
