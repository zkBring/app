import { FC } from 'react'
import {
  ShareItem,
  Container,
  XIconStyled,
  WarpcastIconStyled
} from './styled-components'
import {
  createXShareLink,
  createWarpcastShareLink
} from '@/utils'

const Share: FC = () => {
  return <Container>
    <ShareItem
      href={createXShareLink(
        window.location.href
      )}
      target='_blank'
    >
      <XIconStyled />
    </ShareItem>

    <ShareItem 
      href={createWarpcastShareLink(
        window.location.href
      )}
      target='_blank'
    >
      <WarpcastIconStyled />
    </ShareItem>
  </Container>
}

export default Share