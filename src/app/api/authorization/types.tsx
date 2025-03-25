import axios, { AxiosResponse } from 'axios'

type TResponse = Promise<AxiosResponse<
  { success: boolean }>
>

type TRequest = (
  msg: string,
  timestamp: number,
  sig: string,
  userAddress: string,
  chainId: number
) => TResponse

export default TRequest