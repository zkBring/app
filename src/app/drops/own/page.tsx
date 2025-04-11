'use client'
import {
  createSDK
} from '@/utils'
import {
  useEffect,
  useState
} from 'react'
import Content from '../content'
import {
  TDrop, TDropsPaginationData,
} from '@/types'
import {
  isWhitelisted
} from '@/utils'
import { useSearchParams } from 'next/navigation'
import {
  Page
} from '@/components/common'
import { useAppSelector } from '@/lib/hooks'
import { dropsAmountPerPage } from '@/app/configs'
import { useRouter } from 'next/navigation'

const OwnDrops = () => {
  const searchParams = useSearchParams()
  const limit = Number(searchParams.get('limit')) || dropsAmountPerPage
  const router = useRouter()
  const [
    data,
    setData
  ] = useState<TDrop[]>()

  const [
    loading,
    setLoading
  ] = useState<boolean>(true)
  
  const [
    paginationData,
    setPaginationData
  ] = useState<TDropsPaginationData>()

  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  useEffect(() => {
    if (address) {
      if (!isWhitelisted(address)) {
        return router.push('/')
      }
    }
  }, [
    address
  ])

  useEffect(() => {
    if (!address) { return }
    const init = async () => {
      setLoading(true)
      try {
        const sdk = createSDK({})
        const dropsData = await sdk.getDrops({
          creator: address,
          offset: Number(searchParams.get('offset')) || 0,
          limit
        })

        const { drops, resultSet } = dropsData
        const dropsConverted = drops.map(drop => {
          return {
            title: drop.title,
            address: drop.address,
            expiration: drop.expiration,
            amount: drop.amount,
            token: drop.token,
            description: drop.description,
            maxClaims: drop.maxClaims,
            zkPassAppId: drop.zkPassAppId,
            zkPassSchemaId: drop.zkPassSchemaId,
            decimals: drop.decimals as number,
            symbol: drop.symbol as string,
            creatorAddress: drop.creatorAddress,
            claimsCount: drop.claimsCount || BigInt(0),
            status: drop.status,

          }
        })
        setData(dropsConverted)
        setPaginationData({ ...resultSet, limit })
      } catch (err: unknown) {
        console.log({
          err
        })
      }
      setLoading(false)
    }
    init()
  }, [address])


  return <Page>
    {loading ? 'Loading...' : <Content
      drops={data || []}
      resultSet={paginationData}
    />}
  </Page>
}

export default OwnDrops