import {
  FC,
} from 'react'
import {
  DialogStyled,
  Content,
  ButtonStyled
} from './styled-components'
import TProps from './types'

const DialogTransgateNotAvailable: FC<TProps> = ({
  onClose
}) => {

  return <DialogStyled
    onClose={onClose}
    title="Please install zkTLS verification extension"
  >
    <Content>
      <ButtonStyled
        appearance='action'
        href='https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma'
        target='_blank'
      >
        Install
      </ButtonStyled>
    </Content>
  </DialogStyled>
}

export default DialogTransgateNotAvailable