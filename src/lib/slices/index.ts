import UserSlice, {
  setUserChainId,
  setUserAddress,
} from './user'

import TokenSlice, {
  setTokenAddress,
  setTokenDecimals,
  setTokenImage,
  setTokenStandard,
  setTokenSymbol,
  setTokenAmount
} from './token'


import LinkSlice, {
  setLinkClaimingFinishedAutoRedirect,
  setLinkClaimingFinishedButtonHref,
  setLinkClaimingFinishedButtonTitle,
  setLinkClaimingFinishedDescription,
  setLinkClaimingFinishedButtonOn,
  setLinkCode,
  setLinkExpirationTime,
  setLinkChainId,
  setLinkId,
  setLinkPreferredWallet,
  setLinkWeiAmount,
  setLinkTxHash,
  setLinkLoading,
  setLinkOptimisticClaimUI
} from './link'


export {
  UserSlice,
  setUserChainId,
  setUserAddress,
  LinkSlice,
  setLinkTxHash,
  setLinkOptimisticClaimUI,
  setLinkChainId,
  setTokenAmount,
  setTokenAddress,
  setTokenDecimals,
  setTokenImage,
  setTokenStandard,
  setTokenSymbol,
  setLinkClaimingFinishedAutoRedirect,
  setLinkClaimingFinishedButtonHref,
  setLinkClaimingFinishedButtonTitle,
  setLinkClaimingFinishedDescription,
  setLinkCode,
  setLinkClaimingFinishedButtonOn,
  setLinkExpirationTime,
  setLinkId,
  setLinkPreferredWallet,
  setLinkWeiAmount,
  TokenSlice,
  setLinkLoading
}