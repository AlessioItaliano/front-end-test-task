import styled from 'styled-components';

import noAvaibleImg from '../../images/NoPhotoAvailable.png';

import { variables } from 'stylesheet/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 20px 0;

  width: 100%;
  height: 100%;
  border-radius: 12px;

  background-color: ${variables.colors.secondary};
`;

export const List = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  column-count: 1;
  gap: 10px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    column-count: 2;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    column-count: 3;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 10px;
  width: 100%;
  height: 426px;
  border-radius: 12px;

  background-color: ${variables.colors.secondary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 243px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 297px;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  padding-top: 60%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  background-image: url(${noAvaibleImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Author = styled.p`
  flex-grow: 1;
  font-size: 10px;
  font-weight: 500;
  color: ${variables.colors.primary};
`;

export const Description = styled.p`
  flex-grow: 1;
  font-size: 12px;
  font-weight: 500;
  color: ${variables.colors.primary};
`;

export const Title = styled.p`
  flex-grow: 1;
  font-size: 16px;
  font-weight: 700;
  color: ${variables.colors.primary};
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;
`;

export const EmptyTitle = styled.p`
  flex-grow: 1;
  font-size: 22px;
  font-weight: 700;
  color: ${variables.colors.primary};
`;
