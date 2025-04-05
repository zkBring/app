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
import { toUtf8String } from 'ethers'
import {
  AudienceBlock,
  DropData
} from './components'
import ZKBringLogo from '@/images/zkbring-logo.png'
import {
  defineAudiencePreviewIcon
} from '@/utils'
import ZKTLSConfig from '@/app/configs/zk-tls'
import {
  environment
} from '@/app/configs/index'
import { TEnvironment } from '@/types'

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
  const Icon = defineAudiencePreviewIcon(drop.zkPassSchemaId)
  const configForZKTLS = ZKTLSConfig[environment as TEnvironment]
  const schema = configForZKTLS.schemas.find(schema => schema.schemaId === toUtf8String(drop.zkPassSchemaId))

  return <LinkStyled href={`/drops/${address}`}>
    <Container>
      <AudienceBlock
        icon={Icon}
        color={schema?.color || '#1C1C1C'}
      />
      <Content>
        <AudienceUsers>
          {schema?.shortDescription}
        </AudienceUsers>

        <TitleContainer>
          <Title>
            {amountFormatted} {symbol}
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
