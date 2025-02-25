"use client"
import { FC } from 'react'
import TProps from './types'
import { 
  Button
} from './styled-components'

const LinkButton: FC<TProps> = ({
  className,
  children,
  onClick
}) => {
  return <Button
    className={className}
    onClick={onClick}
  >
    {children}
  </Button>
}

export default LinkButton
