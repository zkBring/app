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
  TDrop,
  TTokenData
} from '@/types'
import { useParams } from 'next/navigation'
import {
  generateMetadataUtil,
  createSDK,
  defineJSONRPC,
  getTokenERC20Data
} from '@/utils'
import { ethers } from 'ethers'
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

    const BASE_SEPOLIA_CHAIN_ID = 84532

    const sdk = createSDK({})
    const drop = await sdk.getDrop(drop_id)
    const tokenData = await getTokenERC20Data(
      drop.token,
      BASE_SEPOLIA_CHAIN_ID
    )
    return {
      drop,
      tokenData
    }
  } catch (err: unknown) {
    console.log({
      err
    })
  }
}


const Edit: FC = () => {
  // const [ status, setStatus ] = useState<TDropStatus>('initial')
  const params = useParams<{ drop_id: string }>()

  const [
    currentDrop,
    setCurrentDrop
  ] = useState<TDrop | null>(null)

  const [
    tokenData,
    setTokenData
  ] = useState<TTokenData | null>(null)

  const [
    loading,
    setLoading
  ] = useState<boolean>(true)

  useEffect(() => {
    const init = async () => {

      const result = await getInitialData(params.drop_id)

      if (result) {
        const {
          drop,
          tokenData
        } = result
      
        const {
          title,
          address,
          expiration,
          amount,
          token,
          description,
          maxClaims,
          zkPassAppId,
          zkPassSchemaId
        } = drop

        setCurrentDrop({
          title,
          address,
          expiration,
          amount,
          token,
          description,
          maxClaims,
          zkPassAppId,
          zkPassSchemaId,
          decimals: 18,
          symbol: 'BRING'
        })

        setTokenData(tokenData)

      }
      setLoading(false)
    }

    init()
  }, [])

  const {
    user: {
      address,
      chainId,
      signer
    }
  } = useAppSelector(state => ({
    user: state.user
  }))


  const [ editPopup, setEditPopup ] = useState<boolean>(false)
  // const loading = false


  if (!currentDrop || !tokenData) {
    return null
  }

  const {
    title,
    address: dropAddress,
    expiration,
    amount,
    token,
    description,
    maxClaims,
    zkPassAppId,
    zkPassSchemaId
  } = currentDrop

  const {
    symbol,
    decimals
  } = tokenData
  const amountFormatted = ethers.formatUnits(amount, decimals)

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
              value: `${amountFormatted || '0'}  ${symbol}`,
              icon: <SmallCoinIcon />
            },
            {
              title: 'Drop claims',
              value: '0',
              limit: `${maxClaims.toString() || '0'}`,
              icon: <ProfileIcon />
            }
          ]}
        />

        <BringAmount
          isPublic={false}
          signer={signer as JsonRpcSigner}
          address={address as string}
          action={(value) => {
            // 
            alert('ACTION')
          }}
        />
        
        <Verification
          dropId={dropAddress}
        />

      </Content>

      <Aside>
        {/* <Status
          status={status}
          setStatus={setStatus}
          drop={currentDrop}
        /> */}
        <WidgetStyled
          title="Campaign"
        >
          <TableRow>
            <TableText>Created at</TableText>
            <TableValue>
              NO_DATA
            </TableValue>
          </TableRow>
        
          <TableRow>
            <TableText>Creator</TableText>
            <TableValue>
              NO_DATA
            </TableValue>
          </TableRow>

          <TableRow>
            <TableText>{symbol} address</TableText>
            <TableValue>
              {shortenString(token)}
            </TableValue>
          </TableRow>

          <TableRow>
            <TableText>Drop contract</TableText>
            <TableValue>
              {shortenString(dropAddress)}
            </TableValue>
          </TableRow>

          <TableRow>
            <TableText>Token standard</TableText>
            <TableValue>ERC 20</TableValue>
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
              href={`/drops/${dropAddress}`}
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