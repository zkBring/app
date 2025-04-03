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
  TOKEN_STAKE_AMOUNT_ATOMIC,
  TOKEN_ADDRESS,

} from '@/app/configs/app-token'
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
import { Drop } from 'zkbring-sdk'
import {
  ERC20Contract
} from '@/abi'

import { checkApproveTransaction } from '@/utils'

const getInitialData = async (
  drop_id: string,
  signer: JsonRpcSigner
) => {
  try {
    const sdk = createSDK({
      signer
    })
    const drop = await sdk.getDrop(drop_id)
    return {
      drop
    }
  } catch (err: unknown) {
    console.log({
      err
    })
  }
}

const stake = async  (
  currentDropInstance: Drop,
  userAddress: string,
  signer: JsonRpcSigner
) => {
  const contractInstance = new ethers.Contract(TOKEN_ADDRESS as string, ERC20Contract, signer)
  let iface = new ethers.Interface(ERC20Contract)
  let data = iface.encodeFunctionData('approve', [
    currentDropInstance.address, String(TOKEN_STAKE_AMOUNT_ATOMIC)
  ])

  await signer.sendTransaction({
    to: TOKEN_ADDRESS as string,
    from: userAddress,
    value: 0,
    data: data
  })

  const checkTransaction = checkApproveTransaction(
    contractInstance,
    userAddress,
    currentDropInstance.address as string,
    TOKEN_STAKE_AMOUNT_ATOMIC
  )

  await checkTransaction()

  const staked = await currentDropInstance.stake(String(TOKEN_STAKE_AMOUNT_ATOMIC))
  return staked
}


const Edit: FC = () => {
  // const [ status, setStatus ] = useState<TDropStatus>('initial')
  const params = useParams<{ drop_id: string }>()

  const [
    currentDrop,
    setCurrentDrop
  ] = useState<TDrop | null>(null)

  const [
    currentDropInstance,
    setCurrentDropInstance
  ] = useState<Drop | null>(null)


  const [
    loading,
    setLoading
  ] = useState<boolean>(true)

  const [
    isStaked,
    setIsStaked
  ] = useState<boolean>(false)

  const {
    user: {
      address,
      chainId,
      signer
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  useEffect(() => {
    if (!signer || !address) { return }
    const init = async () => {

      const result = await getInitialData(
        params.drop_id,
        signer
      )

      if (result) {
        const {
          drop
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
          zkPassSchemaId,
          creatorAddress,
          claimsCount
        } = drop

        const staked = await drop.getStakedAmount()

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
          symbol: 'BRING',
          creatorAddress,
          claimsCount: claimsCount || BigInt(0)
        })

        setCurrentDropInstance(drop)

        setIsStaked(staked !== '0')

      }
      setLoading(false)
    }

    init()
  }, [
    signer
  ])

  const [ editPopup, setEditPopup ] = useState<boolean>(false)
  // const loading = false


  if (!currentDrop) {
    return <Page>
      <Container></Container>
    </Page>
  }

  const {
    title,
    address: dropAddress,
    expiration,
    amount,
    creatorAddress,
    token,
    description,
    maxClaims,
    zkPassAppId,
    zkPassSchemaId,
    decimals,
    symbol,
    claimsCount
  } = currentDrop


  const amountFormatted = ethers.formatUnits(amount, decimals)

  return <Page>
    <Container>
      {editPopup && <EditPopup
        initialValue={description || ''}
        loading={loading}
        onUpdate={async (value) => {
          if (!currentDropInstance) {
            return alert('Cannot update description')
          }
          await currentDropInstance.updateMetadata({
            description: value
          })
          setEditPopup(false)

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
              value: String(claimsCount),
              limit: `${maxClaims.toString() || '0'}`,
              icon: <ProfileIcon />
            }
          ]}
        />

        <BringAmount
          isStaked={isStaked}
          signer={signer as JsonRpcSigner}
          address={address as string}
          action={async (value) => {
            if (!currentDropInstance) {
              return alert('Cannot stake')
            }

            const staked = await stake(
              currentDropInstance,
              address as string,
              signer as JsonRpcSigner
            )
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
              {shortenString(creatorAddress)}
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