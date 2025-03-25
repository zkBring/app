'use client'

import { FC } from 'react'
import {
  Container,
  BreadcrumbsWrapper,
  BreadcrumbsItem
} from './styled-componens'
import TProps, { TBreadcrumbsItem } from './types'

const LaunchContainer: FC<TProps> = ({
  breadcrumbs,
  children
}) => {
  return <Container>
    <BreadcrumbsWrapper>
      {breadcrumbs.map((item) => {
        return <BreadcrumbsItem status={item.status}>
          {item.title}
        </BreadcrumbsItem>
      })}
    </BreadcrumbsWrapper>

    {
      children
    }
  </Container>
}

export default LaunchContainer