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
  isWhitelisted
} from '@/utils'
import {
  AlienIcon,
  DropIcon,
  SatelliteIcon
} from '@/components/icons'
import { usePathname } from "next/navigation"
import {
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
        <LinkStyled href='/' className={pathname === "/" ? LinkStyledActiveClassName : undefined}>
          <DropIcon />
          Explore
        </LinkStyled>
      </MenuItem>
      {isWhitelisted(address) ? <MenuItem>
        <LinkStyled href='/drops/own' className={pathname === "/drops/own" ? LinkStyledActiveClassName : undefined}>
          <SatelliteIcon />
          My Drops
        </LinkStyled>
      </MenuItem> : null}
      <MenuItem>
        <LinkStyled href='/about' className={pathname === "/about" ? LinkStyledActiveClassName : undefined}>
          <AlienIcon /> About
        </LinkStyled>
      </MenuItem>
    </MenuList>
  </Container>
}

export default Menu
