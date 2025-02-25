'use client'
import Image from 'next/image'
import { FC } from 'react'
import {
  LinkdropHeader,
  Account,
  Address,
  Profile,
  Logout
} from './styled-components'
import LinkdropImage from 'images/linkdrop.png'
import { useAppSelector } from '@/lib/hooks'
import { NetworkIndicator } from '..'
import {
  shortenString
} from '@/utils'
import {
  LogoutIcon
} from '@/components/icons'
import { useDisconnect } from "wagmi"
import {
  useAppDispatch
} from '@/lib/hooks'
import {
  setUserAddress
} from '@/lib/slices'

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

  return <LinkdropHeader address={address}>
    <Image
      src={LinkdropImage}
      alt="Application Logo"
      width='107'
      height='40'
    />

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
    
  </LinkdropHeader>
}

export default PageHeader