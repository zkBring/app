export type TProps = {
  title?: string
  placeholder?: string
  type?: string
  name?: string
  disabled?: boolean
  onChange: (value: string) => void
  onClick?: () => void
  error?: string
  value?: string
  className?: string
  note?: string
  refProp?: React.Ref<HTMLInputElement>
}

export type TInputContainerProps = {
  disabled: boolean
  error?: string
  className?: string
}

export type TInputFieldProps = {
  value: string
  error?: string
}

export type TInputTitleProps = {
  error?: string
}
