'use client'

import React, { FC } from 'react'
import {
  Button,
  // ButtonLoader
} from './styled-components'
import { TProps } from './types'
import { Anchor } from './styled-components'

const ButtonOriginalComponent: FC<TProps> = ({
  title,
  disabled = false,
  loading,
  onClick,
  appearance = 'default',
  className,
  size = 'default',
  children,
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={() => {
        if (loading || !onClick) {
          return
        }
        onClick()
      }}
      appearance={appearance}
      loading={loading}
      className={className}
      size={size}
      data-testid='button'
    >
      {/* {loading && <ButtonLoader size='small' />} */}
      {title || children}
    </Button>
  )
}


const ButtonComponent: FC<TProps> = (props) => {
  const { href, to, target, className, size } = props
  if (href) {
    return (
      <Anchor href={href} target={target}>
        <ButtonOriginalComponent {...props} size={size} className={className} />
      </Anchor>
    )
  }
  if (to) {
    return (
      <ButtonOriginalComponent {...props} size={size} />
    )
  }
  return <ButtonOriginalComponent {...props} size={size} className={className} />
}

export default ButtonComponent



