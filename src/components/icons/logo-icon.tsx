import { FC } from 'react'

type TProps = {
  className?: string
}

const LogoIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M43.6405 16.79H39.2671V20.9978H43.6405V16.79Z" fill="#FFD862"/>
  <path d="M43.6302 29.3972H39.2568H34.9042H30.5307V33.6049V37.7926H26.1781H21.8047H17.4521V33.6049H21.8047H26.1781V29.3972V25.1895H21.8047V29.3972H17.4521H13.0786H8.72604H4.3526V25.1895H0V29.3972V33.6049H4.3526V37.7926H8.72604V42.0003H13.0786H17.4521H21.8047H26.1781H30.5307H34.9042H39.2568V37.7926H43.6302V33.6049H47.9828V29.3972V25.1895H43.6302V29.3972Z" fill="#FFD862"/>
  <path d="M21.8109 16.79H17.4375V20.9978H21.8109V16.79Z" fill="#FFD862"/>
  <path d="M39.2635 4.20768V0H34.9109H30.5375H26.1849H21.8114H17.4589H13.0854H8.73282V4.20768H4.35938V12.6031H8.73282H13.0854H17.4589H21.8114H26.1849H30.5375H34.9109H39.2635H43.637V4.20768H39.2635Z" fill="#FFD862"/>
  <path d="M47.9998 8.39355H43.6265V12.6013H47.9998V8.39355Z" fill="#FFD862"/>
  <path d="M4.37344 8.39355H0V12.6013H4.37344V8.39355Z" fill="#FFD862"/>
  </svg>
}

export default LogoIcon




