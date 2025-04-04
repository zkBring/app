import {
  PaginationStyled
} from './styled-components'
import { FC } from 'react'
import TProps from './types'


const DropsPagination:  FC<TProps> = ({
  resultSet,
  baseUrl
}) => {

  if (!resultSet) {
    return null
  }

  const {
    total,
    offset,
    limit,
    count
  } = resultSet
  return <PaginationStyled
    total={total}
    offset={offset}
    limit={limit}
    count={count}
    baseUrl={baseUrl}
  />
}

export default DropsPagination