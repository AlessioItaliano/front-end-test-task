import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  margin-right: auto;
  margin-left: auto;

  background: skyblue;
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 35px;
  font-weight: 700;

  color: white;
`;

export const CopyRight = styled.p`
  color: white;
  font-size: 10px;
  line-height: 1.71;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: blue;
`;
