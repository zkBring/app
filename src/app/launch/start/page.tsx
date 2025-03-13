'use client'
import { FC } from 'react'
import {
  Page,
  LaunchWidget
} from '@/components/common'
import {
  TLaunchStage
} from '@/types'
import {
  GenerateImage,
  GenerateWidgetTitle,
  GenerateContent,
  GenerateProgressBar,
  GenerateTitle,
  GenerateSubtitle
} from './styled-components'
import GenerateImageSrc from '@/images/generate-image.png'
import { useRouter } from 'next/navigation'

const countProgress = (
  stage: TLaunchStage
) => {
  switch (stage) {
    case 'initial':
      return 0
    case 'generate_links':
      return 25
    case 'reclaim_webproofs':
      return 75
  }
}

const defineTitle = (
  stage: TLaunchStage
) => {
  switch (stage) {
    case 'generate_links':
      return 'Preparing drop...'
    case 'reclaim_webproofs':
      return 'Setting up zkTLS webproofs...'
    default:
      return 'Initializing...'
  }
}


const LaunchStart: FC = () => {
  const router = useRouter()
  const progress = countProgress('initial')
  const title = defineTitle('initial')
  const launch = () => {}

  return <Page>
    <LaunchWidget title='Launch'>
      <GenerateImage
        width={49}
        height={49}
        src={GenerateImageSrc}
        alt='launch icon'
      />
      <GenerateWidgetTitle>Launching</GenerateWidgetTitle>
      <GenerateContent>
        <GenerateProgressBar
          max={100}
          // current={Math.ceil(linksGenerateLoader * 100)}
          current={progress}
        />

        <GenerateTitle>
          {title}
        </GenerateTitle>
        <GenerateSubtitle>
          Don't close this window
        </GenerateSubtitle>
      </GenerateContent>

    </LaunchWidget>
  </Page>
}

export default LaunchStart
