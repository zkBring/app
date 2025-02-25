import { FC } from 'react'

type TProps = {
  className?: string
}

const DoneIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9999 31.5999C24.7599 31.5999 31.5999 24.4799 31.5999 15.9999C31.5999 7.2799 24.7199 0.399902 15.9999 0.399902C7.2799 0.399902 0.399902 7.2799 0.399902 15.9999C0.399902 24.7199 7.2799 31.5999 15.9999 31.5999ZM7.4399 15.4799L9.6799 13.2399L14.6399 18.1599L23.4399 9.3999L25.6799 11.6399L14.6399 22.7199L7.4399 15.4799Z" fill="#6EC85C"/>
  </svg>
}

export default DoneIcon


