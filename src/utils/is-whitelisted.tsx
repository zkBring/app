import launchWhitelist from '@/app/configs/launch-whitelist'

type TIsWhitelisted = (
  address: string | null
) => boolean

const isWhitelisted: TIsWhitelisted = (
  address
) => {
  if (!address) {
    return false
  }

  return Boolean(launchWhitelist.find(whitelistItem => whitelistItem.address.toLowerCase() === address.toLowerCase()))
}
export default isWhitelisted