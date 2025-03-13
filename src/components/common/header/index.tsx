'use client'
import { FC, useEffect } from 'react'
import {
  Header,
  Account,
  Address,
  Profile,
  Logout
} from './styled-components'
import { NetworkIndicator } from '..'
import {
  shortenString
} from '@/utils'
import {
  LogoutIcon,
  LogoIcon
} from '@/components/icons'
import { useDisconnect } from "wagmi"
import {
  useAppDispatch
} from '@/lib/hooks'
import {
  setUserAddress
} from '@/lib/slices'
import { useAppSelector } from '@/lib/hooks'

const PageHeader: FC = () => {
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
      chainId: state.user.chain_id,
      address: state.user.address
    },
    link: {
      loading: state.link.loading
    }
  }))

  return <Header address={address}>
    <LogoIcon />
    {address && <Profile>
      <Account>
        <Address loading={loading}>
          {shortenString(address)}
          <NetworkIndicator
            chainId={chainId}
          />
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
    </Profile>}
    
  </Header>
}

export default PageHeader