import styled from 'styled-components';

import { variables } from 'stylesheet/variables';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
  box-sizing: border-box;
`;

export const InputDescription = styled.input`
  width: 100%;
  padding: 18px 20px;
  font-size: 18px;
  height: 100%;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
  box-sizing: border-box;
`;
