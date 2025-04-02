'use client'
import {
  generateMetadataUtil,
  createSDK
} from '@/utils'
import type { Metadata } from 'next'
import {
  useEffect,
  useState
} from 'react'
import Content from './content'
import {
  environment
} from '@/app/configs'
import {
  TDrop,
  TEnvironment
} from '@/types'
import {
  Drop
} from 'zkbring-sdk'
import {
  Page
} from '@/components/common'
import { useAppSelector } from '@/lib/hooks'

const OwnDrops = () => {

  const [
    data,
    setData
  ] = useState<TDrop[]>()

  const [
    loading,
    setLoading
  ] = useState<boolean>(false)

  const {
    user: {
      address
    }
  } = useAppSelector(state => ({
    launch: state.launch,
    user: state.user
  }))

  useEffect(() => {
    if (!address) { return }
    const init = async () => {
      setLoading(true)
      try {
        const sdk = createSDK({})
        const dropsData = await sdk.getDrops({
          creator: address
        })

        const { drops } = dropsData

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
            decimals: 18,
            symbol: 'BRING',
            creatorAddress: drop.creatorAddress,
            claimsCount: drop.claimsCount || BigInt(0)

          }
        })
        setData(dropsConverted)
        
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
    {loading ? 'Loading...' : <Content drops={data || []} />}
  </Page>
}

export default OwnDrops