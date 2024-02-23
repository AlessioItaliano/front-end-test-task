import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { variables } from '../../stylesheet/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
