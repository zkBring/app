import styled from "styled-components"
import {
  Text
} from '@/components/common'

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`


export const QRCodeContainer = styled.div`
`

export const TextStyled = styled(Text)`
  margin: 0 0 40px;
`