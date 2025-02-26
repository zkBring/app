import styled from "styled-components"
import Image from 'next/image'
import {
  Text
} from '@/components/common'

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const VerificationLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 auto 40px;
  justify-content: center;
`


export const VerificationLogo = styled.div`
  width: 93px;
  height: 93px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.additionalBackgroundColor};
`

export const TextStyled = styled(Text)`
  margin-bottom: 40px;
`