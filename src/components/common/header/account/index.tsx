import { FC } from 'react'
import {
  Account,
  Address,
  Profile,
  Logout
} from './styled-components'
import { NetworkIndicator } from '../..'
import {
  shortenString
} from '@/utils'
import {
  LogoutIcon,
  LogoIcon
} from '@/components/icons'
import {
  ConnectButton,
  Button
} from '@/components/common'
import { useDisconnect } from "wagmi"
import {
  useAppDispatch,
  useAppSelector
} from '@/lib/hooks'
import {
  setUserAddress
} from '@/lib/slices'


const AccountComponent = () => {
  
  const { disconnect } = useDisconnect()
  const dispatch = useAppDispatch()



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

  const launchDropButton = <Button
    appearance='action'
    size='extra-small'
    to={address ? '/launch/audience' : '/auth'}
  >
    Launch drop
  </Button>

  if (!address) {  
    return <Profile>
      {launchDropButton}
      <ConnectButton size='small' appearance='default'/>
    </Profile>
  }

  return <Profile>
      {launchDropButton}
      <Account>
        <Address loading={loading}>
          <NetworkIndicator
            chainId={chainId}
          />
          {shortenString(address)}
          
        </Address>
      </Account>
      <Logout
        onClick={() => {
          dispatch(setUserAddress(null))
          disconnect()
          window.location.reload()
        }}
      >
        <LogoutIcon />
      </Logout>
    </Profile>
}

export default AccountComponent