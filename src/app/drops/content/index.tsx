'use client'

import {
  Container,
  Controls
} from '../styled-components'
import DropsList from './drops-list'
import {
  Page
} from '@/components/common'
import { FC } from 'react'
import TProps from './types'
import { useAppSelector } from '@/lib/hooks'
import {
  Button
} from '@/components/common'
import {
  TitleStyled,
  Subtitle
} from './styled-components'

const Content: FC<TProps> = ({
  drops
}) => {
  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  return <Page>
    <Container>
      <TitleStyled>
        Verify your data with zkTLS and claim crypto
      </TitleStyled>
      <Subtitle>
        Explore drops. Prove your activity. Claim tokens.
      </Subtitle>
      <Controls>
        {address && <Button to='/launch/audience' appearance='action'>
          Launch
        </Button>}
      </Controls>

      <DropsList
        drops={drops}
      />

    </Container>
  </Page>
}


export default Content
