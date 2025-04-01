'use client'

import {
  FC,
} from 'react'
import {
  Container,
  Title,
  LinkStyled,
  Content,
  ImageStyled,
  ImageContainer,
  AudienceUsers,
  TitleContainer
} from './styled-components'  
import { TProps } from './types'
import { ethers } from 'ethers'
import {
  shortenString
} from '@/utils'
import {
  AudienceBlock,
  DropData
} from './components'
import ZKBringLogo from '@/images/zkbring-logo.png'

const Drop: FC<TProps> = ({
  drop
}) => {
  const {
    title,
    address,
    maxClaims,
    amount,
    symbol,
    decimals
  } = drop

  const amountFormatted = ethers.formatUnits(amount, decimals)

  return <LinkStyled href={`/drops/${address}`}>
    <Container>
      <AudienceBlock drop={drop} />
      <Content>
        <AudienceUsers>
          For X users
        </AudienceUsers>

        <TitleContainer>
          <Title>
            {shortenString(amountFormatted)} {symbol}
          </Title>

          <ImageContainer>
            <ImageStyled
              src={ZKBringLogo}
              width={18}
              height={18}
              alt="Token"
            />
          </ImageContainer>
        </TitleContainer>
        <DropData drop={drop}/>
      </Content>
      
    </Container>
  </LinkStyled>
}

export default Drop
