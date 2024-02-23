import styled from 'styled-components';

import noAvaibleImg from '../../images/NoPhotoAvailable.png';

import { variables } from 'stylesheet/variables';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 274px;
  height: 426px;

  background-color: ${variables.colors.secondary};
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

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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
