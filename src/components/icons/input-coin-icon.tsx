import { FC } from 'react'

type TProps = {
  className?: string
}

const InputCoinIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.58161 0 0 3.58161 0 8C0 12.4184 3.58161 16 8 16C12.4184 16 16 12.4184 16 8C16 3.57528 12.4184 0 8 0ZM8 3.08716C5.29318 3.08716 3.09351 5.28684 3.09351 7.99365C3.09351 8.4057 2.75754 8.74169 2.34549 8.74169C1.93345 8.74169 1.59746 8.4057 1.59746 7.99365C1.59746 4.46275 4.4691 1.59112 8 1.59112C8.41204 1.59112 8.74801 1.9271 8.74801 2.33915C8.74801 2.75119 8.41204 3.08716 8 3.08716Z" fill="#8A8989"/>
</svg>
}

export default InputCoinIcon
