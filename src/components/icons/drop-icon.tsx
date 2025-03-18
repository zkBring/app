import { FC } from 'react'

type TProps = {
  className?: string
}

const DropIcon: FC<TProps> = ({
  className
}) => {
  return <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.0455 10.4423C20.6149 10.4423 21.0671 9.93661 20.9918 9.36351C20.975 9.22866 20.9583 9.09383 20.9331 8.95898C20.9248 8.90841 20.9164 8.85783 20.908 8.81569C20.0455 3.80945 15.7162 0 10.4992 0C5.2739 0 0.952961 3.80945 0.0904465 8.81569C0.0820726 8.86626 0.0736741 8.91684 0.0653002 8.95898C0.0401784 9.09383 0.02345 9.22866 0.00670212 9.36351C-0.0602893 9.93661 0.383533 10.4423 0.95296 10.4423H20.0455Z" fill="#BCBCBC"/>
    <path d="M10.4998 12.2549C9.95553 12.2549 9.51172 12.7016 9.51172 13.2494V19.0057C9.51172 19.5535 9.95553 20.0002 10.4998 20.0002C11.0441 20.0002 11.488 19.5535 11.488 19.0057V13.2494C11.488 12.7016 11.0441 12.2549 10.4998 12.2549Z" fill="#BCBCBC"/>
    <path d="M2.22544 12.8865C1.84024 12.4988 1.21219 12.4988 0.826987 12.8865C0.441786 13.2742 0.441786 13.9063 0.826987 14.2855L5.8011 19.2917C6.1863 19.6794 6.81435 19.6794 7.19118 19.2917C7.57638 18.904 7.57638 18.272 7.19118 17.8927L2.22544 12.8865Z" fill="#BCBCBC"/>
    <path d="M20.1795 12.8865C19.7943 12.4988 19.1662 12.4988 18.7894 12.8865L13.8153 17.8927C13.4301 18.2804 13.4301 18.9125 13.8153 19.2917C14.2005 19.6794 14.8285 19.6794 15.2053 19.2917L20.1795 14.2855C20.5647 13.9063 20.5647 13.2742 20.1795 12.8865Z" fill="#BCBCBC"/>
  </svg>
}

export default DropIcon
