'use client'
import { FC } from 'react'
import {
  Container,
  MenuList,
  MenuItem,
  LinkStyled,
  LinkStyledActiveClassName
} from './styled-components'
import {
  AlienIcon,
  DropIcon,
  SatelliteIcon
} from '@/components/icons'
import { usePathname } from "next/navigation"
import {
  useAppDispatch,
  useAppSelector
} from '@/lib/hooks'

const Menu: FC = () => {
  const pathname = usePathname()

  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    user: state.user
  }))
  return <Container>
    <MenuList>
      <MenuItem>
        <LinkStyled href='/drops' className={pathname === "/drops" ? LinkStyledActiveClassName : undefined}>
          <DropIcon />
          Explore
        </LinkStyled>
      </MenuItem>
      {address && <MenuItem>
        <LinkStyled href='/drops/own' className={pathname === "/drops/own" ? LinkStyledActiveClassName : undefined}>
          <SatelliteIcon />
          My Drops
        </LinkStyled>
      </MenuItem>}
      <MenuItem>
        <LinkStyled href='/about' className={pathname === "/about" ? LinkStyledActiveClassName : undefined}>
          <AlienIcon /> About
        </LinkStyled>
      </MenuItem>
    </MenuList>
  </Container>
}

export default Menu
