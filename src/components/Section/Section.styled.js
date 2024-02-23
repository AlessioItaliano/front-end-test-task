import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  max-width: 576px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    min-width: 576px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    max-width: 992px;
  }
`;
