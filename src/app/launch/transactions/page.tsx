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
import { useRouter } from 'next/router'

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
  const decimals = 18
  const loading = false
  const approve = () => {}
  const secure = () => {}
  const stages = defineStages(transactionStage)
  const assets: TLaunchAsset[] = []
  const symbol = 'XZX'

  const {
    comission,
    amount,
    totalAmount
  } = countLaunchAmounts(
    assets as TLaunchAsset[],
    decimals as number
  )

  const button = defineButton(
    totalAmount,
    transactionStage,
    loading,
    approve,
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
        comission={comission}
        amount={amount}
        totalAmount={totalAmount}
        symbol={symbol as string}
      />
      {button}
    </LaunchWidget>
  </Page>
}

export default LaunchTransaction
