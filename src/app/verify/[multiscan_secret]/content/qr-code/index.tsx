import {
  FC,
  useRef,
  useEffect
} from 'react'
import QRCodeStyling from 'qr-code-styling'
import qrOptions from '@/app/configs/qr-options'

import {
  Container,
  QRCodeContainer
} from './styled-components'
import {
  Text
} from '@/components/common'
import { Buttons, ButtonStyled } from '../styled-components'
import TProps from './types'

const QRCode: FC<TProps> = ({
  setScreen,
  verificationUrl
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) { return }
    const qrCode = new QRCodeStyling({
      width: 350,
      height: 350,
      data: verificationUrl,
      cornersSquareOptions: qrOptions['zkbring'].cornersSquareOptions,
      cornersDotOptions: qrOptions['zkbring'].cornersDotOptions,
      dotsOptions: {
        color: qrOptions['zkbring'].dotsOptions.color,
        type: "dots"
      },
      backgroundOptions: qrOptions['zkbring'].backgroundOptions,
      imageOptions: qrOptions['zkbring'].imageOptions
    })
    qrCode.append(ref.current)
    qrCode.update({ data: verificationUrl } )
  }, [ref.current])

  return <Container>
    <Text>
      Scan QR to continue verification on your mobile device:
    </Text>
    <QRCodeContainer ref={ref}></QRCodeContainer>
    <Text>
      Your tokens will be available for claiming after successful verification.
    </Text>
    <ButtonStyled onClick={() => {
      setScreen('description')
    }}>
      Back
    </ButtonStyled>    
  </Container>
}

export default QRCode