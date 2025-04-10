import styled, { css, keyframes } from 'styled-components'
import Loader from '../loader'
import { TProps } from './types'
import Link from '../link'

const backgroundAnimation = keyframes`
  0% { background-position: left top; }
  50% { background-position: right bottom; }
  100% { background-position: left top; }
`

export const ButtonLoader = styled(Loader)`
  margin-right: 8px;
`

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))<TProps>`
  cursor: pointer;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 14px 30px;
  font-size: 16px;
  height: 50px;
  line-height: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  justify-content: center;
  border-radius: 12px;
  min-width: 50px;

  //default
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  background-color: ${(props) =>
    props.theme && props.theme.buttonDefaultBackgroundColor};
  color: ${(props) => props.theme && props.theme.additionalTextColor};
  border: 1px solid;
  border-color: ${(props) => props.theme && props.theme.buttonDefaultBorderColor};
  box-sizing: border-box;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        border-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBorderHoverColor)};
        background-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBackgroundHoverColor)};
      }
      &:active {
        border-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBorderActiveColor)};
        background-color: ${(props) =>
          (props.theme && props.theme.buttonDefaultBackgroundActiveColor)};
      }
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 12px 18px;
      height: 30px;
      min-width: 30px;
      font-size: 14px;
      border-radius: 8px;
    `}

  ${(props) =>
    props.appearance === 'action' &&
    css`
      border: none;
      background-color: ${(props) =>
        props.theme && props.theme.buttonActionBackgroundColor};
      color: ${(props) => props.theme && props.theme.additionalTextColor};

      ${!props.disabled &&
      css`
        &:hover {
          background-color: ${(props) =>
            props.theme && props.theme.buttonActionBackgroundHoverColor};
        }
        &:active {
          background-color: ${(props) =>
            props.theme && props.theme.buttonActionBackgroundActiveColor};
        }
      `}
    `}


  ${(props) =>
    props.appearance === 'additional' &&
    css`
      background-color: ${(props) =>
        (props.theme && props.theme.buttonAdditionalBackgroundColor)};
      border-color: ${(props) =>
        (props.theme && props.theme.buttonAdditionalBorderColor)};
      color: ${(props) => (props.theme && props.theme.secondaryTextColor)};
      ${!props.disabled &&
      css`
        &:hover {
          background-color: ${(props) =>
            (props.theme && props.theme.buttonAdditionalBackgroundHoverColor)};
          color: ${(props) => (props.theme && props.theme.primaryTextColor)};
          border-color: ${(props) => (props.theme && props.theme.buttonAdditionalBorderHoverColor)};
        }
        &:active {
          background-color: ${(props) =>
            (props.theme && props.theme.buttonAdditionalBackgroundActiveColor)};
          color: ${(props) => (props.theme && props.theme.primaryTextColor)};
          border-color: ${(props) => (props.theme && props.theme.buttonAdditionalBorderHoverColor)};
        }
      `}
    `}

  ${(props) =>
    props.loading &&
    css`
      background-image: ${(props) => (props.theme && props.theme.buttonGradient)};
      background-size: 200%;
      background-position: left top;
      transition: background-position 0.3s, transform 0.3s;
      border: none;
      color: ${(props) => props.theme && props.theme.additionalTextColor}!important;
      animation-name: ${backgroundAnimation};
      animation-duration: 10s;
      animation-iteration-count: infinite;
      transition: background-position 0.3s, transform 0.3s;
      background-position: left top;
      background-size: 200%;


      ${!props.disabled &&
      css`
        &:hover {
          background-position: right top;
        }
        &:active {
          background-position: center center;
          transform: scale(1.01);
        }
      `}
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${(props) => props.theme && props.theme.buttonDisabledTextColor};
      border-color: ${(props) => props.theme && props.theme.buttonDisabledBorderColor};
      background-color: ${(props) => props.theme && props.theme.buttonDisabledBackgroundColor};
    `}
`

export const ExternalLink = styled.a`
  text-decoration: none;
`

export const InternalLink = styled(Link)`
  text-decoration: none;
`