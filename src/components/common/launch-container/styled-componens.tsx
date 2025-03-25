import styled, { css } from 'styled-components'
import { TBreadcrumbsItem } from './types'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1040px;
  align-items: flex-start;
`


export const BreadcrumbsWrapper = styled.ol`
  margin: 0;
  display: grid;
  gap: 10px;
  padding-left: 18px;
`

export const BreadcrumbsItem = styled.li<TBreadcrumbsItem>`
  font-size: 15px;
  color: ${props => props.theme.secondaryTextColor};

  ${props => props.status === 'current' && css`
    color: ${props => props.theme.primaryTextColor};
  `}

  ${props => props.status === 'done' && css`
    color: ${props => props.theme.secondaryTextColor};
  `}

  ${props => !props.status && css`
    color: ${props => props.theme.secondaryTextColor};
  `}
`