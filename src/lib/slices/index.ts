import LaunchSlice, {
  setLaunchAssets,
  setLaunchDescription,
  setLaunchTitle,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  approve,
  createDrop,
  setLoading,
  clearLaunch
} from './launch'

import UserSlice, {
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData,
  setAuthorizationStep
} from './user'

import VerifySlice, {
  setEphemeralKey,
  setVerifyLoading,
  setVerified,
  setWebproof
} from './verify'

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
  VerifySlice,
  setEphemeralKey,
  setVerifyLoading,
  setVerified,
  setWebproof,

  UserSlice,
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData,
  setAuthorizationStep,

  LinkSlice,
  setLinkTxHash,
  setLinkOptimisticClaimUI,
  setLinkChainId,
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
  setLinkLoading,

  TokenSlice,
  setTokenAmount,
  setTokenAddress,
  setTokenDecimals,
  setTokenImage,
  setTokenStandard,
  setTokenSymbol,

  LaunchSlice,
  setLaunchAssets,
  setLaunchDescription,
  setLaunchTitle,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  approve,
  setLoading,
  createDrop,
  clearLaunch
}
