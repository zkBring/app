import styled, {
  css
} from 'styled-components'
import {
  TInputContainerProps,
  TInputFieldProps,
  TInputTitleProps
} from './types'

export const InputContainer = styled.div.attrs((props) => ({
  className: props.className,
}))<TInputContainerProps>`
  margin-bottom: 24px;
  box-sizing: border-box;
`

export const InputTitle = styled.h3<TInputTitleProps>`
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 12px;
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};

  ${(props) =>
    props.error &&
    css`
      color: ${(props) => (props.theme && props.theme.dangerTextColor)};
    `}
`

export const InputField = styled.input<TInputFieldProps>`
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};
  font-size: 16px;
  width: 100%;
  line-height: 20px;
  font-weight: 500;
  padding: 11px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 0;
  background-color: ${props => props.theme.primaryBackgroundColor};

  ::placeholder {
    color: ${(props) => (props.theme && props.theme.additionalTextColor)};
  }

  &:focus {
    outline: none;
    font-size: 16px;
  }

  ${(props) =>
    props.error &&
    css`
      &:focus {
        outline: none;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: ${(props) =>
        (props.theme && props.theme.inputDisabledBackgroundColor)};
    `}
  &:hover:not(:focus) {
    ${(props) =>
      !props.error &&
      !props.disabled &&
      css`
        outline: none;
      `}
  }
`

export const InputAdditionalText = styled.div<{ type: 'error' | 'note' }>`
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.theme && props.theme.primaryTextColor)};

  ${(prosp) =>
    prosp.type === 'error' &&
    css`
      color: ${(props) => (props.theme && props.theme.dangerTextColor)};
    `}
`
