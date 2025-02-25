import styled from "styled-components"

export const Button = styled.button`
  color: ${props => props.theme.highlightColor};
  font-size: 16px;
  line-height: 1;
  height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
