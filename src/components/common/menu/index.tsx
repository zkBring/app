'use client'
import { FC } from 'react'
import {
  Container,
  MenuList,
  MenuItem,
  LinkStyled,
  LinkStyledActiveClassName,
  Button
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
import TProps from './types'

const Menu: FC<TProps> = ({
  openDialog
}) => {
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
        <Button onClick={openDialog}>
          <AlienIcon /> About
        </Button>
      </MenuItem>
    </MenuList>
  </Container>
}

export default Menu
