
"use client"
import { FC } from 'react'
import TProps from './types'
import { 
  LinkComponent
} from './styled-components'

const Link: FC<TProps> = ({
  children,
  className,
  href,
  target
}) => {
  return <LinkComponent
    className={className}
    target={target}
    href={href}
  >
    {children}
  </LinkComponent>
}

export default Link
