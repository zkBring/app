'use client'
import {
  FC,
  useState
} from 'react'
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
import About from './about'

const PageHeader: FC = () => {
  const {
    user: {
      address,
      chainId
    },
  } = useAppSelector(state => ({
    user: {
      chainId: state.user.chainId,
      address: state.user.address
    }
  }))

  const [
    aboutDialogOpened,
    setAboutDialogOpened
  ] = useState<boolean>(false)

  return <Header>
    {aboutDialogOpened && <About
      onClose={() => setAboutDialogOpened(false)}
    />}
    <LogoLink to='/'>
      <LogoIcon />
    </LogoLink>
    <Menu
      openDialog={() => {
        setAboutDialogOpened(true)
      }}
    />
    <Account />
  </Header>
}

export default PageHeader