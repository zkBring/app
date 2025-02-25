import {
  AxiosResponse
} from 'axios'

type TResponse = Promise<
  AxiosResponse<
    { success: boolean, encrypted_claim_link: string }
  >
>

type TRequest = (qr_id: string) => TResponse

export default TRequest