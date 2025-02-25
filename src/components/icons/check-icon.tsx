import { FC } from 'react'

type TProps = {
  className?: string
}

const CheckIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1.88278" y1="9.13792" x2="13.1782" y2="20.5959" stroke="white" stroke-width="4"/>
    <line x1="11.9647" y1="19.0421" x2="29.233" y2="1.77377" stroke="white" stroke-width="4"/>
  </svg>
}

export default CheckIcon
