import styled from "styled-components"

export const Container = styled.div`
  max-width: ${props => props.theme.mobileBreakpoint};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`
