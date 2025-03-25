'use client'

import React, { FC } from 'react'
import {
  Button,
  ExternalLink,
  InternalLink
} from './styled-components'
import { TProps } from './types'

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
  const {
    href,
    to,
    target,
    className,
    size
  } = props
  if (href) {
    return (
      <ExternalLink href={href} target={target}>
        <ButtonOriginalComponent {...props} size={size} className={className} />
      </ExternalLink>
    )
  }

  if (to) {
    return <InternalLink to={to}>
      <ButtonOriginalComponent {...props} size={size} />
    </InternalLink>
  }

  return <ButtonOriginalComponent {...props} size={size} className={className} />
}

export default ButtonComponent



