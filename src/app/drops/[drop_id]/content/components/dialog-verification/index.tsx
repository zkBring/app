import {
  FC,
  useEffect,
  useState
} from 'react'
import {
  DialogStyled,
  Content,
  TextStyled,
  WidgetStyled,
  SmallSubtitleStyled,
  SmallTextStyled,
  IconedListStyled,
  ButtonStyled
} from './styled-components'
import {
  VerificationCheckIcon,
  VerificationClickIcon,
  VerificationLockIcon,
  VerificationProfileIcon,
  VerificationCoinIcon
} from '@/components/icons'
import { useDispatch } from 'react-redux'
import {
  setEphemeralKey,
  setVerified,
  setWebproof
} from '@/lib/slices'

import TProps from './types'
import { Drop } from 'zkbring-sdk'

const verificationSteps = [
  {
    title: '1. Click "Start verification" to activate secure verification',
    icon: <VerificationClickIcon />
  }, {
    title: '2. Your browser connects to verification nodes using TLS protocol',
    icon: <VerificationLockIcon />
  }, {
    title: '3. Verification happens locally on your device',
    icon: <VerificationCheckIcon />
  }, {
    title: '4. We don\'t access or store any of your personal information',
    icon: <VerificationProfileIcon />
  }, {
    title: '5. Claim tokens right after the proof is ready',
    icon: <VerificationCoinIcon />
  }
]

const checkIfTransgateAvailable = async (
  drop: Drop
) => {
  try {
    const isTransgateAvailable = await drop.isTransgateAvailable()
    return isTransgateAvailable
  } catch (err) {
    return false
  }
}

const startVerification = async (
  drop: Drop
) => {
  try {
    const result = await drop.generateWebproof()
    const { webproof, ephemeralKey } = result
    
    return {
      webproof, ephemeralKey
    }
  } catch (err) {
    console.log({ err })
    alert("Verification failed")
    return null
  }
}

const checkIfClaimedBefore = async (
  drop: Drop,
  uHash: string
) => {
  try {
    const isClaimed = await drop.hasUserClaimed({ uHash: uHash })
    return isClaimed
  } catch (err) {
    console.log({ err })
    alert("Check failed")
    return null
  }
}

const DialogVerification: FC<TProps> = ({
  onClose,
  dropInstance,
  setClaimIsReady,
  showTransgateDialog
}) => {

  const [ loading, setLoading ] = useState<boolean>(false)
  const dispatch = useDispatch()

  return <DialogStyled
    onClose={onClose}
    title="Generate webproof"
  >
    <Content>
      <TextStyled>
      Your device generates a mathematical proof locally using zkTLS webproof, ensuring complete privacy.
      </TextStyled>

      <ButtonStyled
        size='small'
        appearance='action'
        loading={loading}
        disabled={!dropInstance || loading}
        onClick={async () => {
          setLoading(true)
          if (!dropInstance) {
            setLoading(false)
            return alert('Drop is not ready')
          }

          const transgateAvailable = await checkIfTransgateAvailable(dropInstance)

          if (!transgateAvailable) {
            setLoading(false)
            return showTransgateDialog()
          }

          const verificationResult = await startVerification(dropInstance)
          if (!verificationResult) {
            setLoading(false)
            return 
          }

          const {
            webproof,
            ephemeralKey
          } = verificationResult

          const claimedBefore = await checkIfClaimedBefore(
            dropInstance,
            webproof.uHash
          )

          if (claimedBefore) {
            setLoading(false)
            return alert('Already claimed by user')
          }

          dispatch(setEphemeralKey(ephemeralKey))
          dispatch(setWebproof(webproof))
          dispatch(setVerified(true))

          setClaimIsReady()
          setLoading(false)

        }}
      >
        Start verification
      </ButtonStyled>

      <WidgetStyled>
        <SmallSubtitleStyled>
          How it works
        </SmallSubtitleStyled>

        <SmallTextStyled>
        Your data stays private throughout the entire process. The proof only shows you meet the requirements. All happening locally on your device, keeping your data private.
        </SmallTextStyled>

        <IconedListStyled
          items={verificationSteps}
        />
      </WidgetStyled>
    </Content>
  </DialogStyled>
}

export default DialogVerification