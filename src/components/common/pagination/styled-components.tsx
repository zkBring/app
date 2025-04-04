import styled, { css } from 'styled-components'
import LinkComponent from '../link'

export const Container = styled.div<{
  pagesCount: number
}>`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(${props => props.pagesCount}, auto);
  margin: 0 auto;
  gap: 8px;
`

export const Page = styled(LinkComponent)<{ disabled: boolean }>`
  width: 40px;
  cursor: pointer;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.primaryBorderColor};
  text-align: center;
  line-height: 40px;
  color: ${props => props.theme.primaryTextColor};

  ${props => props.disabled && css`
    opacity: .3;
    cursor: not-allowed;
  `}
`