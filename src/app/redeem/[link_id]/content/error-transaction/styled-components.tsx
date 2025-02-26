import styled from 'styled-components'
import Image from 'next/image'
import {
  Title
} from '@/components/common'

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const TitleStyled = styled(Title)`
  margin: 0 0 16px;
`

export const ImageStyled = styled(Image)`
  margin-bottom: 24px;
`