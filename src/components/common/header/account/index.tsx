import { FC } from 'react'
import {
  Account,
  Address,
  Profile,
  Logout
} from './styled-components'
import { NetworkIndicator } from '../..'
import {
  shortenString,
  isWhitelisted
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
  } = useAppSelector(state => ({
    user: {
      chainId: state.user.chainId,
      address: state.user.address
    },
  }))
  const launchDropButton = isWhitelisted(address) ? <Button
    appearance='action'
    size='small'
    to={address ? '/launch/audience' : '/auth'}
  >
    Launch drop
  </Button> : null

  if (!address) {  
    return <Profile>
      {launchDropButton}
      <ConnectButton size='small' appearance='default'/>
    </Profile>
  }

  return <Profile>
      {launchDropButton}
      <Account>
        <Address>
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