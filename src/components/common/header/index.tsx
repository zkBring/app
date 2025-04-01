'use client'
import { FC } from 'react'
import {
  Header,
  LogoLink
} from './styled-components'
import {
  LogoutIcon,
  LogoIcon
} from '@/components/icons'

import {
  useAppSelector
} from '@/lib/hooks'
import {
  Menu
} from '../'
import Account from './account'

const PageHeader: FC = () => {
  const {
    user: {
      address,
      chainId
    },
    link: {
      loading
    }
  } = useAppSelector(state => ({
    user: {
      chainId: state.user.chainId,
      address: state.user.address
    },
    link: {
      loading: state.link.loading
    }
  }))

  return <Header>
    <LogoLink to='/drops'>
      <LogoIcon />
    </LogoLink>
    <Menu />
    <Account />
  </Header>
}

export default PageHeader