import { TQROption } from '@/types'

type TQROptions = Record<string, TQROption>
const qrOptions: TQROptions = {
  'zkbring': {
    cornersSquareOptions: {
      color: "#FFF",
      type: 'extra-rounded'
    },
    cornersDotOptions: {
      color: "#FFF",
      type: 'square'
    },
    dotsOptions: {
      color: "#FFF",
      type: "dots"
    },
    backgroundOptions: {
      color: "#000"
    },
    imageOptions: {
      margin: 20,
      imageSize: 0.5,
      crossOrigin: 'anonymous',
    }
  }
}

export default qrOptions 