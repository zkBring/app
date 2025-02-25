"use client"
import {
  FC,
  // useEffect,
  // useState
} from 'react'
import {
} from 'components/common'
import {
  ButtonStyled,
  // LoaderStyled
} from './styled-components'
import TProps from './types' 
// import { useConnect } from 'wagmi'


const CustomRedirectButton: FC<TProps> = ({
  claimingFinishedButtonTitle,
  claimingFinishedButtonURL,
  // claimingFinishedAutoRedirect
  claimingFinishedButtonOn
}) => {

  if (!claimingFinishedButtonOn) {
    return null
  }
  // const { connectors } = useConnect()
  // const [ isSmartWallet, setIsSmartWallet ] = useState<boolean>(false)
  // const [ loading, setLoading ] = useState<boolean>(true)

  // useEffect(( ) => {
  //   const init = async () => {
  //     const coinbaseConnector = connectors.find(connector => connector.id === "coinbaseWalletSDK")
  //     if (coinbaseConnector) {
  //       const isAuthorized = await coinbaseConnector?.isAuthorized()
  //       setIsSmartWallet(isAuthorized)
  //     }

  //     if (claimingFinishedAutRedirect) {
  //       if (claimingFinishedButtonURL) {
  //         window.location.href = claimingFinishedButtonURL
  //         return
  //       }
  //     }

  //     setLoading(false)
  //   }

  //   init()
  // }, [])

  // if (loading) {
  //   return <LoaderStyled size='small' />
  // }

  if (claimingFinishedButtonURL) {
    return <ButtonStyled
      onClick={() => {
        window.open(claimingFinishedButtonURL, '_blank')
      }}
      appearance='action'
    >
      {claimingFinishedButtonTitle || 'About drop'}
    </ButtonStyled>
  }

  // if (isSmartWallet) {
  //   return <ButtonStyled
  //     href="https://keys.coinbase.com"
  //     target='_blank'
  //     appearance='action'
  //   >
  //     See in Wallet
  //   </ButtonStyled>
  // } 
  
  return null
}

export default CustomRedirectButton
