'use client'
import { Input }  from '@/components/common'

import {
  FC,
  useEffect,
  useState
} from 'react'

import { TProps } from './types'

const Search: FC<TProps> = ({
  onChange
}) => {
  const [
    value,
    setValue
  ] = useState('')

  useEffect(() => {
    onChange(value)
  }, [
    value
  ])

  return <Input
    value={value}
    onChange={value => {
      setValue(value)
    }}
  />
}

export default Search
