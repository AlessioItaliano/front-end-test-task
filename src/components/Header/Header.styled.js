import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: auto;
  width: 100%;
  padding: 10px 20px;

  box-shadow: 0 4px 4px ${variables.colors.boxShadow};
  border-radius: 0 0 10px 10px;

  background: ${variables.colors.secondary};
`;

export const Logo = styled(NavLink)`
  width: 40px;
  height: auto;

  cursor: pointer;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 16px;
  color: ${variables.colors.primary};

  &.active,
  &:hover {
    color: ${variables.colors.tertiary};
  }
`;
