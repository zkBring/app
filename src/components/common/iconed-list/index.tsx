import {
  FC
} from 'react'
import TProps from './types'
import {
  Container,
  ListItem,
  ListItemIcon
} from './styled-components'

const IconedList: FC<TProps> = ({
  items,
  className
}) => {
  return <Container className={className}>
    {items.map(item => {
      const {
        title,
        icon
      } = item
      return <ListItem>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        {title}
      </ListItem>
    })}
  </Container>
}

export default IconedList