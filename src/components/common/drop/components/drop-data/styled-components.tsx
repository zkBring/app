import styled from 'styled-components'
import Image from 'next/image'
import {
  DashedProgressBar
} from '@/components/common'

export const Container = styled.div`
  display: flex;
  gap: 20px;
  color: ${props => props.theme.secondaryTextColor};
  line-height: 1;
  font-size: 13px;
  align-items: center;
  margin: 0;
`

export const Creator = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`

export const CreatorImage = styled(Image)`
  border-radius: 10px;
  min-width: 20px;
  max-height: 20px;
`

export const Claimed = styled.div`
  display: flex;
  align-items: center;

`

export const ClaimedText = styled.p`
  margin-left: 5px;
  margin-right: 10px;
`

export const DashedProgressBarStyled = styled(DashedProgressBar)``