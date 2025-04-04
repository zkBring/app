import {
  DropAudienceIcon,
  XAudienceIcon
} from '@/components/icons'

type TDefineAudienceIcon = (
  schemaId: string
) => React.ReactNode

const defineAudienceIcon: TDefineAudienceIcon = (
  schemaId
) => {
  switch (schemaId) {
    case 'c38b96722bd24b64b8d349ffd6391a8c':
      return <XAudienceIcon />
    default:
      return <DropAudienceIcon />
  }
}

export default defineAudienceIcon