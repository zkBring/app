import styled from 'styled-components'
import {
  Dialog
} from '@/components/common'


export const DialogStyled = styled(Dialog)`
  max-width: 600px;
`

export const DialogContent = styled.div`
`

export const DialogList = styled.ul`
  padding: 0;
  margin: 0 0 30px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const DialogListItem = styled.li`
  display: grid;
  grid-template-columns: 80px 1fr;
`

export const DialogListItemIconWrapper = styled.div`
  grid-columns: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1/3;
`

export const DialogListItemTitle = styled.h3`
  font-size: 15px;
  font-weight: 400;
  grid-column: 2/3;
  margin: 0 0 5px;
  color: ${props => props.theme.primaryTextColor};
`

export const DialogListItemText = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  grid-column: 2/3;
  color: ${props => props.theme.secondaryTextColor};
`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;

  button {
    width: 100%;
  }
`

