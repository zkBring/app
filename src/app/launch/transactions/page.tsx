'use client'
import {
  FC,
  useEffect,
  useState
} from 'react'
import { ethers } from 'ethers'
import {
  Page,
  Button
} from '@/components/common'
import {
  countLaunchAmounts,
  createSDK
} from '@/utils'
import {
  TransactionsData
} from './components'
import {
  StagesStyled,
  LaunchWidgetStyled
} from './styled-components'
import {
  InputDocumentIcon,
  InputDropIcon
} from '@/components/icons'
import {
  TLaunchTransactionStage,
  TTransactionStage,
  TFees
} from '@/types'
import { useRouter } from 'next/navigation'
import {
  approve,
  createDrop,
  setLoading
} from '@/lib/slices'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/lib/hooks'
import { JsonRpcSigner } from 'ethers'
import { BringSDK } from 'zkbring-sdk'

const defineButton = (
  fees: TFees | null,
  stage: TLaunchTransactionStage,
  loading: boolean,
  approve: () => void,
  launch: () => void,
  goToDrop: () => void
) => {

  if (!fees) {
    return null
  }
  switch (stage) {
    case 'initial':
    case 'approve':
      return <Button
        onClick={approve}
        appearance='action'
        loading={loading}
        disabled={loading}
      >
        Approve
      </Button>

    case 'launch':
    case 'created':
      return <Button
        onClick={launch}
        appearance='action'
        loading={loading}
        disabled={loading}
      >
        Launch
      </Button>

  }

}

const defineStages = (
  stage: TLaunchTransactionStage
) => {

  const stages: TTransactionStage[] = [
    {
      title: 'Approve tokens',
      icon: '✓',
      status: 'next'
    }, {
      title: 'Launch',
      icon: <InputDropIcon />,
      status: 'next'
    }
  ]

  switch (stage) {
    case 'initial':
    case 'approve':
      stages[0].status = 'current'
      return stages

    case 'launch':
      stages[0].status = 'done'
      stages[1].status = 'current'
      return stages

    case 'created':
      stages[0].status = 'done'
      stages[1].status = 'done'
      return stages

    default:
      return stages
  }
}

const countFees = async (
  sdk: BringSDK,
  tokensPerClaim: bigint,
  totalClaims: bigint
) => {
  try {

    const fees = await sdk.calculateFee({
      amount: tokensPerClaim,
      maxClaims: totalClaims
    })

    return fees
  } catch (err) {
    console.log({
      err
    })
  }
  
}

const LaunchTransaction: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [ fees, setFees ] = useState<TFees | null>(null)
  const [ sdk, setSDK ] = useState<BringSDK | null>(null)


  useEffect(() => {
    dispatch(
      setLoading(
        false
      )
    )
  }, [])

  const {
    launch: {
      decimals,
      tokensPerClaim,
      totalClaims,
      symbol,
      transactionStage,
      createdDropId,
      loading
    },
    user: {
      signer,
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))


  const stages = defineStages(transactionStage as TLaunchTransactionStage)

  useEffect(() => {
    if (!signer) { return }
    if (!address) { return }
    if (sdk) { return }
    const sdkInit = createSDK({
      signer
    })
    setSDK(sdkInit)
  }, [
    signer,
    sdk
  ])

  useEffect(() => {
    if (transactionStage === 'created') {
      setTimeout(() => {
        router.push(`/drops/${createdDropId}`)
      }, 3000)
    }
  }, [
    transactionStage
  ])


  useEffect(() => {
    const init = async () => {
      if (!sdk) { return }
      const fees = await countFees(
        sdk,
        ethers.parseUnits(tokensPerClaim as string, decimals as number),
        BigInt(totalClaims as string)
      )

      if (fees) {
        setFees(fees)
      }
    }

    init()
  }, [
    sdk
  ])


  const button = defineButton(
    fees,
    transactionStage as TLaunchTransactionStage,
    loading,
    () => {
      if (fees) {
        dispatch(approve({
          address: address as string,
          totalAmount: String(fees.totalAmount),
          signer: signer as JsonRpcSigner
        }))
      }
      
    },
    () => {
      dispatch(createDrop({
        sdk: sdk as BringSDK
      }))
    },
    () => {
      router.push(`/drops/${createdDropId}`)
    }
  )

  return <Page>
    <LaunchWidgetStyled title='Transactions'>
      <StagesStyled
        stages={stages}
      />

      <TransactionsData
        fees={fees}
        symbol={symbol as string}
        decimals={decimals as number}
      />
      {button}
    </LaunchWidgetStyled>
  </Page>
}

export default LaunchTransaction
