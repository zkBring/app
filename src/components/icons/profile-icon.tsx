import { FC } from 'react'

type TProps = {
  className?: string
}

const ProfileIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9045 20.8464H1.1044C0.498754 20.8464 0 20.3828 0 19.8013V16.0256C0 13.4129 2.24443 11.2891 5.00544 11.2891H12.9946C15.7556 11.2891 18 13.4129 18 16.0256V19.8013C18 20.3744 17.5101 20.8464 16.9045 20.8464Z" fill="#FFD862"/>
    <path d="M9.00457 9.81352C11.6214 9.81352 13.7428 7.8061 13.7428 5.32984C13.7428 2.85358 11.6214 0.846191 9.00457 0.846191C6.38771 0.846191 4.26631 2.85358 4.26631 5.32984C4.26631 7.8061 6.38771 9.81352 9.00457 9.81352Z" fill="#FFD862"/>
  </svg>
}

export default ProfileIcon
