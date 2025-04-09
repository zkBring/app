'use client'
import {
  FC,
  useState
} from 'react'
import {
  WidgetStyled,
  TextStyled,
  ButtonStyled,
  Container
} from './styled-components'
import {
  Link,
  ConnectButton
} from '@/components/common'
import {
  StepTitle
} from '../../styled-components'
import TProps from './types'
import {
  Drop
} from 'zkbring-sdk'
import {
  defineExplorerURL
} from '@/utils'
import { useAppSelector } from '@/lib/hooks'
import { TWebproof } from '@/types'
import ZKBringLogo from '@/images/zkbring-logo.png'
import { useDispatch } from 'react-redux'
import {
  setTxHash,
  setClaimed
} from '@/lib/slices'


const checkForClaim = async (
  waitForClaim: () => Promise<any>,
  claimFinished: (finished: boolean) => void
) => {
  try {
    await waitForClaim()
    claimFinished(true)
  } catch (err) {
    console.log({ err })
    claimFinished(false)

  }

}

const claim = async (
  dispatchClaimed: (claimed: boolean) => void,
  dropInstance: Drop | null,
  webproof: TWebproof | null,
  ephemeralKey?: string | null,
  recipient?: string | null
) => {
  if (!dropInstance) {
    return alert('Drop is not ready')
  }

  if (!webproof) {
    return alert('webproof is not ready')
  }

  if (!ephemeralKey) {
    return alert('ephemeralKey is not ready')
  }

  if (!recipient) {
    return alert('Please connect wallet')
  }

  try {
    const { txHash, waitForClaim } = await (dropInstance as Drop).claim({
      webproof: webproof as TWebproof,
      recipient,
      ephemeralKey: ephemeralKey as string
    })
  
    checkForClaim(
      waitForClaim,
      (finished) => dispatchClaimed(finished)
    ) // without await
  
    return txHash
  } catch (err) {
    console.log({ err })
    return null
  }
}

const defineContent = (
  chainId: number | null,
  claimed: boolean,
  txHash: string | null
) => {
  if (!chainId) {
    return <TextStyled>
      You’re eligible! Claim your tokens now!
    </TextStyled>
  }

  if (claimed && txHash) {
    const explorerUrl = `${defineExplorerURL(chainId)}/tx/${txHash}`

    return <TextStyled>
      You’ve successfully claimed your tokens! <Link href={explorerUrl} target="_blank">View on explorer</Link>
    </TextStyled>
  }

  if (txHash) {
    const explorerUrl = `${defineExplorerURL(chainId)}/tx/${txHash}`
    return <TextStyled>
      Transaction sent! Your tokens will arrive shortly. <Link href={explorerUrl} target="_blank">View on explorer</Link>
    </TextStyled>
  }

  return <TextStyled>
    You’re eligible! Claim your tokens now!
  </TextStyled>
}


const Claim: FC<TProps> = ({
  symbol,
  amount,
  dropInstance,
  recipient
}) => {

  const [
    loading,
    setLoading
  ] = useState<boolean>(false)

  const {
    verify: {
      webproof,
      ephemeralKey,
      verified
    },
    claim: {
      claimed,
      txHash
    },
    user: {
      chainId
    }
  } = useAppSelector(state => ({
    verify: state.verify,
    claim: state.claim,
    user: state.user
  }))

  const dispatch = useDispatch()

  const content = defineContent(
    chainId, // id of connected user chain
    claimed, // if claimed
    txHash // hash of claiming
  )

  const claimCallback = async () => {
    setLoading(true)
    const txHash = await claim(
      (claimed: boolean) => {
        setLoading(false)
        dispatch(setClaimed(claimed))
      },
      dropInstance,
      webproof,
      ephemeralKey,
      recipient,
    )
    if (txHash) {
      dispatch(setTxHash(txHash))
    } else {
      dispatch(setLoading(false))
    }
  }

  const defineButton = () => {
    if (!recipient) {
      return <ConnectButton
        size='small'
        appearance='action'
        disabled={!verified}
        onConnect={claimCallback}
      >
        Claim
      </ConnectButton>
    }

    return <ButtonStyled
      appearance='action'
      loading={loading}
      size='extra-small'
      disabled={!verified}
      onClick={claimCallback}
    >
      Claim
    </ButtonStyled>
  }

  return <Container disabled={!verified}>
    <StepTitle>
      2. Claim drop
    </StepTitle>
    <WidgetStyled
      title={`${amount} ${symbol}`}
      image={ZKBringLogo}
      finished={claimed}
    >
      {content}
      {!claimed && defineButton()}
    </WidgetStyled>
  </Container>
}

export default Claim