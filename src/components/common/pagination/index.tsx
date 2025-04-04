import { FC } from 'react'
import TProps from './types'
import {
  Container,
  Page
} from './styled-components'
import { useRouter } from 'next/navigation'

const PAGES_LIMIT = 10

const defineIfPrevButtonIsDisabled = (
  offset: number
) => {
  return offset === 0
}

const defineIfNextButtonIsDisabled = (
  total:number,
  limit: number,
  offset: number
) => {
  
  return total <= (offset + limit)
}

const Pagination: FC<TProps> = ({
  limit, // 10
  offset,
  className,
  baseUrl,
  count,
  total // 125
}) => {
  const router = useRouter()
  const potentialPagesCount = Math.ceil(total / limit) // 13 + 2 (forward and backward added)

  const prevDisabled = defineIfPrevButtonIsDisabled(offset)
  const nextDisabled = defineIfNextButtonIsDisabled(
    total,
    limit,
    offset
  )
  return <Container pagesCount={potentialPagesCount + 2} className={className}>

    <Page
      disabled={prevDisabled}
      href={`${baseUrl}?limit=${limit}&offset=${offset - limit}`}
    >
      {`<`}
    </Page>

    {new Array(potentialPagesCount).fill(null).map((page, idx) => {
      return <Page
        disabled={
          idx === (offset / limit)
        }
        href={`${baseUrl}?limit=${limit}&offset=${idx * limit}`}
      >
        {idx + 1}
      </Page>
    })}


    <Page
      disabled={nextDisabled}
      href={`${baseUrl}?limit=${limit}&offset=${offset + limit}`}
    >
      {`>`}
    </Page>

  </Container>
}

export default Pagination