import styled from "styled-components"

import { Button } from "@/components/common"

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`

export const ButtonStyled = styled(Button)`
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 80px;
  border: 1px solid ${props => props.theme.primaryBorderColor};
  max-width: 500px;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  min-height: 450px;

`