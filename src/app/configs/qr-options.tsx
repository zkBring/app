import { TQROption } from '@/types'

type TQROptions = Record<string, TQROption>
const qrOptions: TQROptions = {
  'zkbring': {
    cornersSquareOptions: {
      color: "#FFF",
      type: 'square'
    },
    cornersDotOptions: {
      color: "#FFF",
      type: 'square'
    },
    dotsOptions: {
      color: "#FFF",
      type: "square"
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