import { FC } from 'react'

type TProps = {
  className?: string
}

const SmallCoinIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.47702 0 0 4.47702 0 10C0 15.523 4.47702 20 10 20C15.523 20 20 15.523 20 10C20 4.46909 15.523 0 10 0ZM10 3.85895C6.61648 3.85895 3.86688 6.60855 3.86688 9.99207C3.86688 10.5071 3.44692 10.9271 2.93186 10.9271C2.41681 10.9271 1.99682 10.5071 1.99682 9.99207C1.99682 5.57844 5.58637 1.9889 10 1.9889C10.5151 1.9889 10.935 2.40888 10.935 2.92393C10.935 3.43899 10.5151 3.85895 10 3.85895Z" fill="#FFD862"/>
  </svg>
}

export default SmallCoinIcon
