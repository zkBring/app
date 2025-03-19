import { FC } from 'react'
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
  VerificationProfileIcon
} from '@/components/icons'
import TProps from './types'


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
    icon: <VerificationProfileIcon />
  }
]

const DialogVerification: FC<TProps> = ({
  onClose
}) => {
  return <DialogStyled
    onClose={onClose}
    title="Generate webproof"
  >
    <Content>
      <TextStyled>
      Your device generates a mathematical proof locally using zkTLS webproof, ensuring complete privacy.
      </TextStyled>

      <ButtonStyled appearance='action'>
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