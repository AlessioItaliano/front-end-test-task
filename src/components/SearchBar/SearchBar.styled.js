import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
`;
