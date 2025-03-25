import axios, { AxiosResponse } from 'axios'

type TResponse = Promise<AxiosResponse<
  { success: boolean, nonce: string }>
>

type TRequest = (
  user_address: string
) => TResponse

export default TRequest