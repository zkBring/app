'use client'

import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  EditPopup,
  BringAmount,
  Verification,
  Status
} from './components'
import {
  Container,
  Aside,
  StatsStyled,
  Content,
  WidgetStyled,
  ButtonStyled,
  AsideButtonsContainer
} from './styled-components'
import {
  TDropStatus,
  TDrop
} from '@/types'
import { drops as dropsApi } from '@/app/api'
import { useParams } from 'next/navigation'
import {
  EditableWidget,
  TableRow,
  TableText,
  TableValue,
  Page
} from '@/components/common'
import {
  shortenString,
  formatTime,
  formatDate
} from '@/utils'
import {
  ProfileIcon,
  SmallCoinIcon
} from '@/components/icons'
import { useAppSelector } from '@/lib/hooks'
import { JsonRpcSigner } from 'ethers'

const getInitialData = async (drop_id: string) => {
  try {
    const drops = await dropsApi.getOne(drop_id)
    return drops.data.campaign
  } catch (err: unknown) {
    console.log({
      err
    })
    return null
  }
}

const Edit: FC = () => {
  const [ status, setStatus ] = useState<TDropStatus>('initial')
  const [
    currentDrop,
    setCurrentDrop
  ] = useState<TDrop | null>(null)

  const {
    user: {
      address,
      chainId,
      signer
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  const params = useParams<{ drop_id: string }>()

  useEffect(() => {
    const init = async () => {
      const drop = await getInitialData(params.drop_id)
      setCurrentDrop(drop)
    }

    init()
  }, [])

  const [ editPopup, setEditPopup ] = useState<boolean>(false)
  const loading = false


  if (!currentDrop) {
    return null
  }

  const {
    description = '',
    claims_count,
    symbol,
    is_public,
    created_at,
    creator_address,
    campaign_id,
    token_standard,
    proxy_contract_address,
    token_address
  } = currentDrop
  
  return <Page>
    <Container>
      {editPopup && <EditPopup
        initialValue={description || ''}
        loading={loading}
        onUpdate={(value) => {
          // 
          alert('Update')
        }}
        onClose={() => {
          setEditPopup(false)
        }}
      />}
      <Content>
        <StatsStyled
          stats={[
            {
              title: 'Drop amount',
              value: `${claims_count || '0'} ${symbol}`,
              icon: <SmallCoinIcon />
            },
            {
              title: 'Drop claims',
              value: claims_count || '0',
              limit: '1000',
              icon: <ProfileIcon />
            }
          ]}
        />

        <BringAmount
          isPublic={is_public}
          signer={signer as JsonRpcSigner}
          address={address as string}
          action={(value) => {
            // 
            alert('ACTION')
          }}
        />
        
        <Verification
          dropId={campaign_id}
        />

      </Content>

      <Aside>
        <Status
          status={status}
          setStatus={setStatus}
          drop={currentDrop}
        />
        <WidgetStyled
          title="Campaign"
        >
          {created_at && <TableRow>
            <TableText>Created at</TableText>
            <TableValue>
              {formatDate(created_at as string)}, {formatTime(created_at as string)}
            </TableValue>
          </TableRow>}
        
          <TableRow>
            <TableText>Creator</TableText>
            <TableValue>
              {shortenString(creator_address)}
            </TableValue>
          </TableRow>

          <TableRow>
            <TableText>{symbol} address</TableText>
            <TableValue>
              {shortenString(token_address)}
            </TableValue>
          </TableRow>

          <TableRow>
            <TableText>Drop contract</TableText>
            <TableValue>
              {shortenString(proxy_contract_address)}
            </TableValue>
          </TableRow>

          <TableRow>
            <TableText>Token standard</TableText>
            <TableValue>{token_standard}</TableValue>
          </TableRow>

          <AsideButtonsContainer>
            <ButtonStyled
              size='extra-small'
              appearance='additional'
              onClick={() => {
                alert('DOWNLOAD')
              }}
            >
              Download full report
            </ButtonStyled>

            <ButtonStyled
              size='extra-small'
              target='_blank'
              appearance='additional'
              href={`/drops/${campaign_id}`}
            >
              Public page
            </ButtonStyled>
          </AsideButtonsContainer>

        </WidgetStyled>

        <EditableWidget
          value={description}
          title="Description"
          action={() => {
            setEditPopup(true)
          }}
        />
      </Aside>
    </Container>
  </Page>
}

export default Edit