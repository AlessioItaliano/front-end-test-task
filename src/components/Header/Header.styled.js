import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { variables } from 'stylesheet/variables';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 4px ${variables.colors.boxShadow};
  border-radius: 0 0 10px 10px;

  background: ${variables.colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  width: 100%;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    min-width: 576px;
    width: auto;
    max-width: 991px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    min-width: 992px;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  width: 40px;
  height: auto;
  gap: 5px;

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
