'use client'
import {
  FC,
  useState
} from 'react'
import {
  Container,
  Title,
  Description,
  ShowMore,
  ImageStyled
} from './styled-components'
import TProps from './types'
import ZKBringLogo from '@/images/zkbring-logo.png'

const VALUE_LENGTH = 240

const defineDescription = (
  shortened: boolean,
  value?: string
) => {
  if (!value) {
    return null
  }
  if (value.length <= VALUE_LENGTH) {
    return value
  }
  const valueFormatted = shortened ? `${value.slice(0, VALUE_LENGTH)}...` : value
  return valueFormatted
}

const DropDescription: FC<TProps> = ({
  title,
  description
}) => {

  const [
    shorten,
    setShorten
  ] = useState<boolean>(false)

  const descriptionFormatted = defineDescription(
    shorten,
    description
  )

  return <Container>
    <ImageStyled
      width={108}
      height={108}
      alt='ZKBring Logo'
      src={ZKBringLogo}
    />
    <Title>{title}</Title>
    {description && <Description>
      {descriptionFormatted}
      {
        shorten &&
        description.length > VALUE_LENGTH && 
        <ShowMore
          onClick={() => setShorten(false)}
        >show more</ShowMore>
      }
    </Description>}
  </Container>

}

export default DropDescription