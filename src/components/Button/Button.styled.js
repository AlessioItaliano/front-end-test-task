import styled from 'styled-components';
import { variables } from '../../stylesheet/variables';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 10px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  cursor: pointer;

  border-radius: 12px;
  border-color: transparent;
  background: ${variables.colors.accent};

  color: ${variables.colors.secondary};

  &:focus,
  &:hover {
    background-color: ${variables.colors.accentHover};
  }
`;
