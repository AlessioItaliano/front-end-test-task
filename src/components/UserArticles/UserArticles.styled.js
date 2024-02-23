import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: auto;
  width: 100%;

  padding: 20px;

  margin-right: auto;
  margin-left: auto;

  box-shadow: 0 4px 4px ${variables.colors.boxShadow};
  border-radius: 10px;

  background: ${variables.colors.secondary};
`;

export const Title = styled.p`
  flex-grow: 1;

  font-size: 22px;
  font-weight: 700;

  color: ${variables.colors.primary};
`;
