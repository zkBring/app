'use client'
import { FC } from 'react'
import {
  Page,
  LaunchWidget,
  Button
} from '@/components/common'
import {
  countLaunchAmounts
} from '@/utils'
import {
  TransactionsData
} from './components'
import {
  StagesStyled
} from './styled-components'
import {
  InputDocumentIcon,
  InputDropIcon
} from '@/components/icons'
import {
  TLaunchTransactionStage,
  TTransactionStage,
  TLaunchAsset
} from '@/types'
import { useRouter } from 'next/navigation'
import {
  approve
} from '@/lib/slices'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/lib/hooks'

const defineButton = (
  totalAmount: string,
  stage: TLaunchTransactionStage,
  loading: boolean,
  approve: (totalAmount: string) => void,
  secure: () => void,
  launch: () => void
) => {
  switch (stage) {
    case 'approve':
      return <Button onClick={() => {
        approve(totalAmount)
      }} appearance='action' loading={loading}>
        Approve
      </Button>

    case 'launch':
      return <Button onClick={launch} appearance='action' loading={loading}>
        Launch
      </Button>
    case 'initial':
    case 'secure':
      return <Button onClick={secure} appearance='action' loading={loading}>
        Deploy contract
      </Button>
      }
}

const defineStages = (
  stage: TLaunchTransactionStage
) => {

  const stages: TTransactionStage[] = [
    {
      title: 'Create drop contract',
      icon: <InputDocumentIcon />,
      status: 'next'
    }, {
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
    case 'secure':
      stages[0].status = 'current'
      return stages

    case 'approve':
      stages[0].status = 'done'
      stages[1].status = 'current'
      return stages

    case 'launch':
      stages[0].status = 'done'
      stages[1].status = 'done'
      stages[2].status = 'current'
      return stages

    default:
      return stages
  }
}

const LaunchTransaction: FC = () => {
  const router = useRouter()
  const transactionStage = 'initial'
  const loading = false
  const secure = () => {}
  const stages = defineStages(transactionStage)
  const assets: TLaunchAsset[] = []
  const symbol = 'XZX'
  const dispatch = useDispatch()
  const {
    launch: {
      decimals,
      tokensPerClaim,
      totalClaims
    }
  } = useAppSelector(state => ({
    launch: state.launch
  }))



  

  const {
    comission,
    amount,
    totalAmount
  } = countLaunchAmounts(
    tokensPerClaim as string,
    totalClaims as string,
    decimals as number
  )

  console.log({
    comission,
    amount,
    totalAmount
  })

  const button = defineButton(
    String(totalAmount),
    transactionStage,
    loading,
    () => {
      dispatch(approve(String(totalAmount)))
      // approve(totalAmount)
    },
    secure,
    () => {
      router.push(`/launch/start`)
    }
  )

  return <Page>
    <LaunchWidget title='Transactions'>
      <StagesStyled
        stages={stages}
      />

      <TransactionsData
        comission={String(comission)}
        amount={String(amount)}
        totalAmount={String(totalAmount)}
        symbol={symbol as string}
      />
      {button}
    </LaunchWidget>
  </Page>
}

export default LaunchTransaction
