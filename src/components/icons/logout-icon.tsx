import { FC } from 'react'

type TProps = {
  className?: string
}

const LogoutIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3333 8.66663V10.1733C14.3333 13.1533 13.1399 14.3466 10.1599 14.3466H10.0733C7.39327 14.3466 6.15994 13.38 5.93994 11.02" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.93311 5.04003C6.13977 2.64003 7.37311 1.66003 10.0731 1.66003H10.1598C13.1398 1.66003 14.3331 2.85337 14.3331 5.83337" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.0002 8H2.41357" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.89984 5.76672L1.6665 8.00006L3.89984 10.2334" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
}

export default LogoutIcon