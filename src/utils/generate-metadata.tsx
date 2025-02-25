import type { Metadata } from 'next'

type TGenerateMetadata = ({
  title,
  description,
  image
}: {
  title?: string
  description: string
  image?: string
}) => Metadata

const generateMetadataUtil: TGenerateMetadata = ({
  title,
  description,
  image
}) => {
  return {
    title: title || 'Linkdrop Claim App',
    description,
    openGraph: {
      title: title || 'Linkdrop Claim App',
      images: [image || '/meta-image.png'],
      description
    }
  }
}

export default generateMetadataUtil