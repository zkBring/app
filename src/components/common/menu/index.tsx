import { FC } from 'react'
import {
  Container,
  MenuList,
  MenuItem,
  LinkStyled,
  LinkStyledActiveClassName
} from './styled-components'
import {
  BookIcon,
  DropIcon
} from '@/components/icons'
import { usePathname } from "next/navigation"

const Menu: FC = () => {
  const pathname = usePathname()

  return <Container>
    <MenuList>
      <MenuItem>
        <LinkStyled href='/drops' className={pathname === "/drops" ? LinkStyledActiveClassName : undefined}>
          <DropIcon />
          Explore
        </LinkStyled>
      </MenuItem>
      <MenuItem>
        <LinkStyled href='/about' className={pathname === "/about" ? LinkStyledActiveClassName : undefined}>
          <BookIcon /> About
        </LinkStyled>
      </MenuItem>
    </MenuList>
  </Container>
}

export default Menu
