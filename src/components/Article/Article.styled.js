import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  padding-left: 29px;
  padding-right: 29px;
  margin-right: auto;
  margin-left: auto;

  background: skyblue;
  //
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  border-radius: 12px;
  object-fit: cover;
`;

export const Author = styled.p`
  margin-top: 14px;
  flex-grow: 1;

  font-size: 10px;
  font-weight: 500;

  color: black;
`;

export const Description = styled.p`
  margin-top: 14px;
  flex-grow: 1;

  font-size: 14px;
  font-weight: 500;

  color: black;
`;
export const Title = styled.p`
  margin-top: 14px;
  flex-grow: 1;

  font-size: 16px;
  font-weight: 500;

  color: black;
`;
