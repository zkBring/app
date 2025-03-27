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
  ConnectButton
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

  if (!address) {  
    return <Profile>
      <ConnectButton size='small'/>
    </Profile>
  }

  return <Profile>
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