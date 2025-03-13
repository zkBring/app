'use client'
import {
  FC,
  useState
} from 'react'
import {
  shortenString,
  alertError,
  defineIfUserOwnsContractERC20
} from '@/utils'
import {
  InputCoinIcon,
  InputProfileIcon
} from '@/components/icons'
import {
  TTokenData
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
import { useRouter } from 'next/router'

const defineContractsOptions = (contractsERC20: TTokenData[]) => {
  return contractsERC20.map(contract => {
    return {
      label: `${contract.symbol} ${shortenString(contract.address)}`,
      value: contract
    }
  })
}

const LaunchTokenData: FC = () => {

  // define
    const loading = false
    const userLoading = false
    const tokenAmount = '0'
    const tokenAmountFormatted = '0'
    const chainId = 8453
    const symbol = 'XZX'

    const address = 'sss'
    const signer = {}
  // -----
  const [
    tokenAddress,
    setTokenAddress
  ] = useState<string>('')
  
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

  // useEffect(() => {
  //   return getERC20Contracts()
  // }, [])

  // useEffect(() => {
  //   if (!tokenAddress.length) { return }
  //   setTokenContractData(tokenAddress, currentType as TTokenType)
  // }, [tokenAddress, currentType])

  const selectTokenOptions: any[] = defineContractsOptions(
    []
  )

  const router = useRouter()

  const defineIfNextDisabled = () => {
    return !tokenAddress ||
           loading ||
           !totalClaims ||
           !tokensPerClaim ||
           totalClaims === '0' ||
           tokensPerClaim === '0'
  }

  const selectCurrentValue = () => {
    const currentOption = selectTokenOptions.find(option => option.value.address === tokenAddress)
    if (!currentOption) {
      return null
    }
    if (currentOption) {
      return currentOption
    }
  }

  const selectCurrentPlaceholder = () => {
    if (!tokenAddress) {
      return 'Choose token address'
    }
    const selectValue = selectCurrentValue()
    if (!selectValue) { return tokenAddress }
    return selectValue.label
  }


  return <Page>
    <LaunchContainer
      breadcrumbs={[
        {
          title: 'Audience',
          status: 'current'
        }, {
          title: 'Token',
        }, {
          title: 'Drop'
        }, {
          title: 'Launch'
        }
      ]}
    >
      <LaunchWidget title='Choose your audience'>
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
            Token balance: {tokenAmount ? <Tooltip text={`${tokenAmountFormatted} ${symbol}`}><TokenBalanceValue>{tokenAmountFormatted}</TokenBalanceValue> {symbol}</Tooltip> : '0'}
          </TokenBalance>
        </InputSubtitle>
        <SelectStyled
          disabled={loading || userLoading}
          onChange={async ({ value }: { value: TTokenData | string}) => {
            if (typeof value === 'string') {
              if (currentType === 'ERC20' && chainId) {
                const tokenOwnership = await defineIfUserOwnsContractERC20(address, value, signer)
                if (!tokenOwnership) {
                  return alertError('No tokens of provided contract found')
                }
                setTokenAddress(value)
              } else {
                alertError('No chainId provided')
              }
            } else {
              const contractAddress = String(value.address).toLowerCase()
              const tokenType = String(value.standard)
              if (tokenType === 'UNKNOWN') {
                return alertError('Token type is UNKNOWN. Unable to select')
              }
              setCurrentType(tokenType)
              setTokenAddress(contractAddress)
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
              // setTokenData(
              //   currentType as TTokenType,
              //   totalClaims,
              //   tokensPerClaim,
              //   () => {
                router.push(`/campaigns/campaign-data`)
              //   }
              // )
            }}
          >
            Next
          </Button>

          <Button
            to={`/campaigns/new/ERC20/audience`}
          >
            Back
          </Button>
        </ButtonsContainer>

      </LaunchWidget>
    </LaunchContainer>

  </Page>
}

export default LaunchTokenData
