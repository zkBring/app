'use client'
import {
  FC,
  useState
} from 'react'
import {
  Popup,
  Input
} from '@/components/common'
import {
  resolveAddress
} from '@/utils'
import {
  useDebouncedEffect
} from '@/hooks'
import {
  useAppDispatch
} from '@/lib/hooks'
import {
  setUserAddress
} from '@/lib/slices'
import { TProps } from './types'

const check = async (
  address: string,
  setAddressResolved: (address: string) => void,
  setError: (error?: string) => void,
  setValidity: (valid: boolean) => void,
  setLoading: (valid: boolean) => void,
) => {
  setLoading(true)
  setValidity(false)
  const result = await resolveAddress(address)
  if (result) {
    setError(undefined)
    setValidity(true)
    setAddressResolved(result)
    setLoading(false)

    return
  }
  setValidity(false)
  setLoading(false)
  setError('Enter your address or ENS to proceed')
}

const AddressPopup:FC<TProps> = ({
  setScreen,
  onClose
}) => {
  const [ address, setAddress ] = useState<string>('')
  const [ addressResolved, setAddressResolved ] = useState<string>('')
  const [ error, setError ] = useState<string | undefined>(undefined)
  const [ valid, setValidity ] = useState<boolean>(false)
  const [ loading, setLoading ] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  useDebouncedEffect(() => {
    if (!address) { return }
    check(
      address,
      setAddressResolved,
      setError,
      setValidity,
      setLoading
    )
  }, [
    address
  ], 1000)


  return <Popup
    onClose={onClose}
    title='Claim to ENS or address'
    subtitle='Enter your ENS or address where the token will be sent'
    buttonTitle='Claim to this name'
    buttonDisabled={!valid}
    buttonLoading={loading}
    buttonAction={() => {
      alert(addressResolved)
      dispatch(setUserAddress(addressResolved))
      setScreen('claim_ready')
    }}
  >
    <Input
      value={address}
      onChange={(value) => {
        setAddress(value)
      }}
      error={error}
      placeholder='0x.. or ENS'
    />

  </Popup>
}

export default AddressPopup