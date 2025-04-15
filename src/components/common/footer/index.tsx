import { FC } from 'react'
import {
  Footer,
  FooterContent,
  FooterSocial,
  FooterVersion,
  LinkStyled
} from './styled-components'

import {
  docsLink
} from '@/app/configs'

const FooterComponent = () => {
  return <Footer>
    <FooterContent>
      <FooterVersion>
        version 1.25
      </FooterVersion>
      <LinkStyled href='https://zkbring.com/' target='_blank'>
        $BRING
      </LinkStyled>
      <LinkStyled href={docsLink} target="_blank">
        docs
      </LinkStyled>
    </FooterContent>
    <FooterSocial>
      <LinkStyled href="https://x.com/zkBring" target='_blank'>
        X (Twitter)
      </LinkStyled>
      <LinkStyled href='https://warpcast.com/~/channel/bring' target="_blank">
        Warpcast
      </LinkStyled>
    </FooterSocial>
  </Footer>
}

export default FooterComponent