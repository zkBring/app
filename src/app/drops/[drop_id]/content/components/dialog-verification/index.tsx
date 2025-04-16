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
  IconedListStyled,
  ButtonStyled,
  Buttons,
  SmallTextStyled,
  LinkStyled
} from './styled-components'
import {
  VerificationCheckIcon,
  VerificationLockIcon,
  VerificationProfileIcon
} from '@/components/icons'
import { useDispatch } from 'react-redux'
import {
  setEphemeralKey,
  setVerified,
  setWebproof
} from '@/lib/slices'
import {
  docsLink,
  extensionDownloadLink
} from '@/app/configs'
import TProps from './types'
import { Drop } from 'zkbring-sdk'
import plausibleApi from '@/app/api/plausible'

const verificationSteps = [
  {
    title: 'Privacy-preserving: ',
    icon: <VerificationLockIcon />,
    value: 'No personal data is shared'
  }, {
    title: 'Local verification: ',
    icon: <VerificationCheckIcon />,
    value: 'Everything happens on your device'

  }, {
    title: 'Secured by math: ',
    icon: <VerificationProfileIcon />,
    value: 'Built with zero-knowledge proofs'

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
    plausibleApi.invokeEvent({
      eventName: 'verification_started'
    })
    const result = await drop.generateWebproof()
    plausibleApi.invokeEvent({
      eventName: 'verification_finished'
    })
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
  showTransgateDialog,
  installStarted
}) => {

  const [ loading, setLoading ] = useState<boolean>(false)
  const dispatch = useDispatch()

  return <DialogStyled
    onClose={onClose}
    title="Private Verification with zkTLS"
  >
    <Content>
      <TextStyled>
        zkTLS lets you prove facts about your online accounts-without exposing personal data. It runs entirely on your device for full privacy.
      </TextStyled>

      <WidgetStyled>
        <IconedListStyled
          items={verificationSteps}
        />
      </WidgetStyled>

      <SmallTextStyled>
        To verify via zkTLS, you'll need to install the free <LinkStyled href={extensionDownloadLink} target="_blank">zkPass TransGate</LinkStyled> extension.
      </SmallTextStyled>
    </Content>

    <Buttons>
      <ButtonStyled
        href={docsLink}
        target='_blank'
      >
        Learn more
      </ButtonStyled>

      <ButtonStyled
        appearance='action'
        loading={loading}
        disabled={!dropInstance || loading}
        onClick={async () => {
          if (installStarted) {
            return window.location.reload()
          }
          setLoading(true)
          if (!dropInstance) {
            setLoading(false)
            return alert('Drop is not ready')
          }

          const transgateAvailable = await checkIfTransgateAvailable(dropInstance)

          if (!transgateAvailable) {
            plausibleApi.invokeEvent({
              eventName: 'transgate_not_available'
            })
            setLoading(false)
            return showTransgateDialog()
          }

          const verificationResult = await startVerification(dropInstance)
          if (!verificationResult) {
            plausibleApi.invokeEvent({
              eventName: 'verification_failed'
            })
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
            plausibleApi.invokeEvent({
              eventName: 'already_claimed'
            })
            return alert('Already claimed by user')
          }

          dispatch(setEphemeralKey(ephemeralKey))
          dispatch(setWebproof(webproof))
          dispatch(setVerified(true))

          setClaimIsReady()
          setLoading(false)

        }}
      >
        {installStarted ? 'Reload' : 'Start verification'}
      </ButtonStyled>
    </Buttons>
  </DialogStyled>
}

export default DialogVerification