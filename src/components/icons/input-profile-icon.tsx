import { FC } from 'react'

type TProps = {
  className?: string
}

const InputProfileIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.795 15H0.770585C0.348003 15 0 14.6524 0 14.2162V11.3844C0 9.42483 1.56604 7.83191 3.49251 7.83191H9.06687C10.9933 7.83191 12.5594 9.42483 12.5594 11.3844V14.2162C12.5594 14.6461 12.2176 15 11.795 15Z" fill="#8A8989"/>
    <path d="M6.28289 6.72565C8.10879 6.72565 9.58898 5.22006 9.58898 3.36282C9.58898 1.50558 8.10879 0 6.28289 0C4.457 0 2.97681 1.50558 2.97681 3.36282C2.97681 5.22006 4.457 6.72565 6.28289 6.72565Z" fill="#8A8989"/>
  </svg>
}

export default InputProfileIcon
