import { FC } from 'react'

type TProps = {
  className?: string
}

const XIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.2103 16.9373L37.7289 0H34.2885L21.682 14.7064L11.6132 0H0L15.226 22.2387L0 40H3.44064L16.7535 24.4695L27.3868 40H39L23.2095 16.9373H23.2103ZM18.4979 22.4346L16.9552 20.2201L4.68036 2.59936H9.96499L19.8709 16.8199L21.4136 19.0344L34.2901 37.5189H29.0055L18.4979 22.4354V22.4346Z" fill="#BCBCBC"/>
  </svg>
}

export default XIcon
