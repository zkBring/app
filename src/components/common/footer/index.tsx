import { FC } from 'react'
import { Footer } from './styled-components'
import { LockIcon } from '@/components/icons'

const FooterComponent: FC = () => {
  return <Footer>
    <LockIcon />
    Secured by zkTLS webproofs
  </Footer>
}

export default FooterComponent