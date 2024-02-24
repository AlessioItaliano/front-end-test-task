import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const InputTitle = styled.input`
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
`;

export const InputDescription = styled.textarea`
  padding: 18px 20px;
  font-size: 18px;
  height: 180px;

  resize: none;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
`;
