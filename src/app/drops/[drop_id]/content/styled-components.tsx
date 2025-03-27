
import Link from 'next/link'
import styled from 'styled-components'
import { Button, Stats } from '@/components/common'

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
`

export const LinkStyled = styled(Link)`
  text-decoration: underline;
`


export const StatsStyled = styled(Stats)`
  margin-bottom: 10px;
`

export const StepTitle = styled.h2`
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 10px;
  color: ${props => props.theme.secondaryTextColor};
`

export const IconedButton = styled(Button)`
  margin: 0 auto 40px;
  display: flex;
  gap: 7px;
  align-items: center;
`