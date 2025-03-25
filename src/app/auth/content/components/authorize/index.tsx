'use client'
import {
  FC
} from 'react'
import {
  Container,
  ButtonStyled
} from './styled-components'
import {
  useAppDispatch
} from '@/lib/hooks'
import { nonce as nonceApi } from '@/app/api'
import { SiweMessage } from 'siwe'
import {
  authorize
} from '@/lib/slices'
import { useAppSelector } from '@/lib/hooks'

const createSigMessage = (
  statement: string,
  nonce: string,
  address: string,
  chainId: number
) => {

  return new SiweMessage({
    domain: document.location.host,
    address: address,
    chainId: chainId as number,
    uri: document.location.origin,
    version: '1',
    statement,
    nonce
  })
}


const Authorize: FC = () => {
  const dispatch = useAppDispatch()

  const {
    user: {
      address,
      chainId,
      signer
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  return <Container>
    <ButtonStyled
      appearance='action'
      onClick={async () => {
        if (chainId && address) {
          const timestamp = Date.now()
          const humanReadable = new Date(timestamp).toUTCString()
          const statement = `I'm signing this message to login to zkBring Dashboard at ${humanReadable}`
          const { data: { nonce } } = await nonceApi.get(address as string)
          const message = createSigMessage(
            statement,
            nonce,
            address as string,
            chainId as number
          )

          const preparedMessage = message.prepareMessage()
          dispatch(authorize({
            signer,
            message: preparedMessage,
            timestamp
          }))
        }
        
    }}
    >
      Authorize
    </ButtonStyled>
  </Container>
}

export default Authorize
