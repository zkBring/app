'use client'
import { useAppSelector } from '@/lib/hooks'

import {

} from '@/lib/slices'
import { TProps } from './types'
import { FC } from 'react'
import {
  Container,
  SubtitleStyled,
  TitleStyled
} from './styled-components'
import {
  TokenPreview,
  ExplorerButton,
  CustomRedirectButton
} from '@/components/common'
import { TTokenStandard } from '@/types'

const defineSubtitle = (
  standard: TTokenStandard | null,
  claimingFinishedDescription?: string 
) => {
  if (claimingFinishedDescription) { return claimingFinishedDescription }
  return `Your ${standard === 'ERC20' ? 'tokens' : 'NFT'} will appear in your account in a few minutes`
}

const ClaimFinishedScreen: FC<TProps> = ({
  linkParams,
  tokenData
}) => {
  const { link: {
    tx_hash
  }} = useAppSelector(state => ({
    link: state.link
  }))
  return <Container>
    <TokenPreview
      src={tokenData.image as string}
      name={tokenData.symbol}
      tokenStandard={tokenData.standard}
      amount={linkParams.amount}
      decimals={tokenData.decimals}
      claimed={true}
    />
    <TitleStyled>Successfully claimed</TitleStyled>
    <SubtitleStyled>{
      defineSubtitle(
        tokenData.standard
      )
    }</SubtitleStyled>
    <CustomRedirectButton
      claimingFinishedAutoRedirect={linkParams.claiming_finished_auto_redirect}
      claimingFinishedButtonTitle={linkParams.claiming_finished_button_title}
      claimingFinishedButtonURL={linkParams.claiming_finished_button_url}
      claimingFinishedButtonOn={linkParams.claiming_finished_button_on}
    />
    <ExplorerButton
      hash={tx_hash}
      chainId={linkParams.chain_id}
    />
  </Container>
}

export default ClaimFinishedScreen
