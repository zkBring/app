import styled from 'styled-components'

export const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  box-sizing: border-box;
`

export const Dialog = styled.div`
  max-width: 680px;
  position: relative;
  width: 100%;
  background: ${(props) => (props.theme && props.theme.primaryBackgroundColor)};
  border-radius: 16px;
  border: 1px solid ${(props) => (props.theme && props.theme.widgetBorderColor)};
  padding: 50px;
`

export const DialogTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`
