import React, { FC, UIEvent } from 'react'
import {
  DialogWrapper,
  Dialog,
  DialogTitle
} from './styled-components'
import { TProps } from './types'

const DialogComponent: FC<TProps> = ({
  title,
  onClose,
  children,
  className,
  wrapperClassName
}) => {
  const onClick = (e: UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const currentTarget = e.currentTarget as HTMLElement
    if (target === currentTarget) {
      onClose && onClose()
    }
  }

  return (
    <DialogWrapper onClick={onClick} className={wrapperClassName}>
      <Dialog className={className}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {children}
      </Dialog>
    </DialogWrapper>
  )
}

export default DialogComponent
