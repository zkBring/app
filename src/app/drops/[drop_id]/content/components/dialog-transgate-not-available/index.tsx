import {
  FC,
} from 'react'
import {
  DialogStyled,
  Content,
  ButtonStyled
} from './styled-components'
import TProps from './types'
import {
  extensionDownloadLink
} from '@/app/configs'
import plausibleApi from '@/app/api/plausible'

const DialogTransgateNotAvailable: FC<TProps> = ({
  onClose
}) => {

  return <DialogStyled
    onClose={() => onClose()}
    title="Please install zkTLS verification extension"
  >
    <Content>
      <ButtonStyled
        appearance='action'
        onClick={() => {
          plausibleApi.invokeEvent({
            eventName: 'transgate_install_redirect',
            data: {
              source: 'dialog'
            }
          })
          window.open(extensionDownloadLink, '_blank')
          onClose(true)
        }}
      >
        Install
      </ButtonStyled>
    </Content>
  </DialogStyled>
}

export default DialogTransgateNotAvailable