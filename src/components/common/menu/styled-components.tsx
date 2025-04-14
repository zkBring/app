import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Container = styled.nav`
  display: flex;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: none;
  }
`

export const LinkStyledActiveClassName = 'LinkStyledActive'

export const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 4px;
  display: flex;
`

export const MenuItem = styled.li`
  width: max-content;
`

export const LinkStyled = styled(Link)<{
  className?: string
}>`
  padding: 8px 24px;
  border-radius: 9px;
  color: ${props => props.theme.secondaryTextColor};
  background-color: transparent;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background-color .3s;
  background-color: ${props => props.theme.menuItemBackgroundColor};

  &:hover {
    background-color: ${props => props.theme.menuItemHoverBackgroundColor};
  }
  &.${LinkStyledActiveClassName} {
    background-color: ${props => props.theme.menuItemActiveBackgroundColor};
    color: ${props => props.theme.primaryTextColor};
  } 
`

export const Button = styled.button`
  padding: 8px 24px;
  border-radius: 9px;
  color: ${props => props.theme.secondaryTextColor};
  background-color: transparent;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background-color .3s;
  background-color: ${props => props.theme.menuItemBackgroundColor};

  &:hover {
    background-color: ${props => props.theme.menuItemHoverBackgroundColor};
  }
`