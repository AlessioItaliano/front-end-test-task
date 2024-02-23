import styled from 'styled-components';

import noAvaibleImg from '../../images/NoPhotoAvailable.png';

import { variables } from 'stylesheet/variables';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 10px;
  min-width: 260px;
  height: 426px;
  border-radius: 12px;

  background-color: ${variables.colors.secondary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 260px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 306px;
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

  color: black;
`;

export const Description = styled.p`
  flex-grow: 1;

  font-size: 12px;
  font-weight: 500;

  color: black;
`;
export const Title = styled.p`
  flex-grow: 1;

  font-size: 16px;
  font-weight: 700;

  color: black;
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:hover::after {
    content: 'Add to favorites';
    position: absolute;
    z-index: 100;
    top: -30px;
    right: -120px;
    background-color: ${variables.colors.tertiary};
    color: ${variables.colors.secondary};
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const StyledActiveIcon = styled.div`
  width: 22px;
  height: 22px;

  color: ${variables.colors.accentBtn};
`;

export const StyledNormalIcon = styled.div`
  width: 22px;
  height: 22px;
  color: ${variables.colors.tertiary};
`;
