import { FC, useEffect } from 'react'
import TProps from './types'
import {
  VerificationContainer,
  ButtonStyled,
  WidgetStyled,
  TextStyled
} from './styled-components'

import {
  copyToClipboard
} from '@/utils'

const renderMainButton = (
  reclaimUrl?: string,
) => {
  return <ButtonStyled
    title='Copy URL'
    size='extra-small'
    appearance='additional'
    onClick={() => {
      if (reclaimUrl) {
        copyToClipboard({
          value: reclaimUrl
        })
        return 
      }

      alert('Redirect URL not defined')

    }}
  /> 
}

const Verification: FC<TProps> = ({
  dropId
}) => {


  const claimURLDecrypted = `/drops/${dropId}`

  return <WidgetStyled title="Claim eligibilty">
    <VerificationContainer>
      <TextStyled>
        Users must follow @zkBring to claim. It’s verified with zkTLS Web Proofs – totally secure and trustless.
      </TextStyled>
      {renderMainButton(
        claimURLDecrypted
      )}
    </VerificationContainer>
  </WidgetStyled>
}

export default Verification
