import styled from 'styled-components';

import { variables } from '../../stylesheet/variables';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div`
  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    padding-left: 20px;
    padding-right: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: ${variables.breakpoints.desktop};
    padding-left: 29px;
    padding-right: 29px;
    margin-right: auto;
    margin-left: auto;
  }
`;
