import { FC } from 'react'
import {
  DialogStyled,
  DialogContent,
  DialogList,
  DialogListItem,
  DialogListItemText,
  DialogListItemTitle,
  DialogListItemIconWrapper,
  Buttons
} from './styled-components'
import TProps from './types'
import {
  VerificationProfileIcon,
  VerificationCoinIcon,
  FingerTouchIcon
} from '@/components/icons'
import {
  Button
} from '@/components/common'
import {
  docsLink
} from '@/app/configs'
import Image from 'next/image'
import ZKBringLogo from '@/images/zkbring-logo.png'


const items = [
  {
    title: 'Discover airdops',
    text: 'Explore airdrops available on our platform.',
    icon: <FingerTouchIcon />
  },
  {
    title: 'Verify data',
    text: 'Use cutting-edge zkTLS technology to locally validate your online data. zkTLS works directly on your device, can verify any online data, and confirms your web activity while keeping your information private.',
    icon: <VerificationProfileIcon />
  },
  {
    title: 'Claim tokens',
    text: 'After verifying your zkTLS webproof, zkBring smart contracts transfer tokens directly to your wallet on the Base network.',
    icon: <VerificationCoinIcon />
  }
]

const About: FC<TProps> = ({
  onClose
}) => {
  return <DialogStyled
    onClose={onClose}
    title="Discover and claim zkTLS airdrops"
    icon={<Image
      width={48}
      src={ZKBringLogo}
      height={42}
      alt='zkBring token image'
    />}
  >
    <DialogContent>
      <DialogList>
        {items.map(item => {
          return <DialogListItem>
            <DialogListItemIconWrapper>
              {item.icon}
            </DialogListItemIconWrapper>
            <DialogListItemTitle>
              {item.title}
            </DialogListItemTitle>
            <DialogListItemText>
              {item.text}
            </DialogListItemText>
          </DialogListItem>
        })}
      </DialogList>
      <Buttons>
        <Button
          href={docsLink}
          target='_blank'
        >
          Learn more
        </Button>

        <Button
          onClick={onClose}
          appearance='action'
        >
          Explore airdrops
        </Button>
      </Buttons>
    </DialogContent>
  </DialogStyled>
}

export default About