import { TAlchemyNFTData } from 'types'
import { getValidImage } from './'

const getAlchemyTokenImage = async (tokenData: TAlchemyNFTData) => {
  if (tokenData.rawMetadata) {
    if (tokenData.rawMetadata.image) {
      const image = await getValidImage(tokenData.rawMetadata.image)
      return image
    }
    if (tokenData.rawMetadata.animation_url) {
      const image = await getValidImage(tokenData.rawMetadata.animation_url)
      return image
    }
  } else if (tokenData.media && tokenData.media[0] && tokenData.media[0].raw) {
    const image = await getValidImage(tokenData.media[0].raw)
    return image
  }
  return
}
export default getAlchemyTokenImage