'use client'
import {
  FC,
  useState,
  useEffect
} from 'react'
import {
  shortenString,
  alertError,
  defineIfUserOwnsContractERC20,
  getTokenERC20TokenList,
  getTokenERC20Data,
  getERC20TokenBalance
} from '@/utils'
import {
  InputCoinIcon,
  InputProfileIcon
} from '@/components/icons'
import {
  TTokenData, TZerionERC20Item
} from '@/types'
import {
  Page,
  LaunchWidget,
  LaunchContainer,
  ButtonsContainer,
  Button,
  Tooltip
} from '@/components/common'
import {
  SwitcherStyled,
  InputStyled,
  SelectStyled,
  SplitInputs,
  TokenBalance,
  TokenBalanceValue,
  InputSubtitle
} from './styled-components'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/hooks'
import { ethers } from "ethers"
import {
  setTokenData
} from '@/lib/slices'
import { useDispatch } from 'react-redux'

const defineContractsOptions = (contractsERC20: TTokenData[]) => {
  return contractsERC20.map(contract => {
    return {
      label: `${contract.symbol} ${shortenString(contract.address)} (balance: ${ethers.formatUnits(contract.amount as string, contract.decimals)})`,
      value: contract
    }
  })
}

const LaunchTokenData: FC = () => {

  const {
    user: {
      address,
      chainId,
      signer
    }
  } = useAppSelector(state => ({
    user: state.user
  }))

  const dispatch = useDispatch()

  // define
  const loading = false
  const userLoading = false

  const [
    currentType,
    setCurrentType
  ] = useState<string | null>('ERC20')

  const [
    totalClaims,
    setTotalClaims
  ] = useState<string>('0')

  const [
    tokensPerClaim,
    setTokensPerClaim
  ] = useState<string>('0')

  const [
    currentSwitcherValue,
    setCurrentSwitcherValue
  ] = useState<string>('tokens')

  const [
    tokensList,
    setTokensList
  ] = useState<TTokenData[]>([])

  const [
    token,
    setToken
  ] = useState<TTokenData | null>(null)

  useEffect(() => {
    console.log({
      address,
      chainId
    })
    if (!address || !chainId) { return }
    const init = async () => {

      const tokenList = await getTokenERC20TokenList(
        address,
        chainId
      )

      console.log({ tokenList })
      setTokensList(tokenList)
    }
    init()
  }, [address])


  // useEffect(() => {
  //   if (!tokenAddress.length) { return }
  //   setTokenContractData(tokenAddress, currentType as TTokenType)
  // }, [tokenAddress, currentType])

  const selectTokenOptions: any[] = defineContractsOptions(tokensList)

  const router = useRouter()

  const defineIfNextDisabled = () => {
    return !token ||
           loading ||
           !totalClaims ||
           !tokensPerClaim ||
           totalClaims === '0' ||
           tokensPerClaim === '0'
  }

  const selectCurrentValue = () => {
    const currentOption = selectTokenOptions.find(option => option.value.address === (token && token?.address))
    if (!currentOption) {
      return null
    }
    if (currentOption) {
      return currentOption
    }
  }

  const tokenbalance = token ? ethers.formatUnits(token.amount as string, token.decimals) : '0'

  const selectCurrentPlaceholder = () => {
    if (!token) {
      return 'Choose token address'
    }
    const selectValue = selectCurrentValue()
    if (!selectValue) { return token.address }
    return selectValue.label
  }


  return <Page>
    <LaunchContainer
      breadcrumbs={[
        {
          title: 'Audience',
        }, {
          title: 'Token',
          status: 'current'
        }, {
          title: 'Drop'
        }, {
          title: 'Launch'
        }
      ]}
    >
      <LaunchWidget title='What are you dropping?'>
        <SwitcherStyled
          active={currentSwitcherValue}
          options={[
            {
              title: 'Tokens (ERC20)',
              id: 'tokens'
            },
            {
              title: 'Soulbound NFT',
              id: 'nfts',
              disabled: true,
              additionalTag: 'MAYBE SOON'
            }
          ]}
          disabled={loading || userLoading}
          onChange={(id) => {
            
          }}
        />
        <InputSubtitle>
          Token contract address
          <TokenBalance>
            Token balance: {token ? <Tooltip text={`${tokenbalance} ${token.symbol}`}><TokenBalanceValue>{tokenbalance}</TokenBalanceValue> {token.symbol}</Tooltip> : '0'}
          </TokenBalance>
        </InputSubtitle>
        <SelectStyled
          disabled={loading || userLoading}
          onChange={async ({ value }: { value: TTokenData | string}) => {
            if (typeof value === 'string') {
              if (currentType === 'ERC20' && chainId && address) {
                const tokenOwnership = await defineIfUserOwnsContractERC20(address, value, signer)
                if (!tokenOwnership) {
                  return alertError('No tokens of provided contract found')
                }

                const tokenData = await getTokenERC20Data(
                  value,
                  chainId as number
                )

                const tokenBalance = await getERC20TokenBalance(
                  value,
                  address as string,
                  signer
                )

                const tokenDataResult = {
                  ...tokenData,
                  amount: tokenBalance?.tokenAmount
                }

                setToken(tokenDataResult)
                
              } else {
                alertError('No chainId provided')
              }
            } else {
              setToken(value)
            }
          }}
          placeholder={selectCurrentPlaceholder()}
          value={selectCurrentValue()}
          options={selectTokenOptions}
          notFoundActiveCondition={(value) => {
            return value.startsWith('0x') && value.length === 42
          }}
        />
        

        <SplitInputs>
          <InputStyled
            value={totalClaims}
            disabled={loading}
            placeholder='0'
            onChange={(value: string) => {
              setTotalClaims(value)
              return value
            }}
            icon={<InputProfileIcon />}

            title='Total claims'
            note='Set the amount of tokens each user will receive.'
          />

          <InputStyled
            value={tokensPerClaim}
            disabled={loading}
            placeholder='0'
            onChange={(value: string) => {
              setTokensPerClaim(value)
              return value
            }}
            title='Tokens per claim'
            icon={<InputCoinIcon />}

            note='Define how many total claims are allowed for this drop.'
          />
        </SplitInputs>
        <ButtonsContainer>
          <Button
            appearance='action'
            disabled={defineIfNextDisabled()}
            onClick={() => {
              if (defineIfNextDisabled()) {
                return alertError('Please, choose token, set claims amount and amount of tokens per claim')
              }
              dispatch(setTokenData({
                tokenData: token as TTokenData,
                claimPattern: 'transfer',
                totalClaims,
                tokensPerClaim
              }))
              router.push(`/launch/drop-description`)
            }}
          >
            Next
          </Button>

          <Button
            to='/launch/audience'
          >
            Back
          </Button>
        </ButtonsContainer>

      </LaunchWidget>
    </LaunchContainer>

  </Page>
}

export default LaunchTokenData
