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


const defineLaunchButton = (
  address: string | null
) => {
  if (!address) {
    return <Button
      appearance='action'
      size='small'
      to='/auth'
    >
      Launch drop
    </Button>
  }

  if (isWhitelisted(address)) {
    return <Button
      appearance='action'
      size='small'
      to='/launch/audience'
    >
      Launch drop
    </Button>
  }

  return <Button
    appearance='action'
    size='small'
    href='https://form.typeform.com/to/kmi5YYVY'
    target='_blank'
  >
    Launch drop
  </Button>
}


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
  const launchDropButton = defineLaunchButton(address)

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