import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Container = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  column-count: 1;

  margin-bottom: 30px;

  gap: 16px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    column-count: 2;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    column-count: 3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
