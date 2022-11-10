import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieTitle = styled.h2`
  font-size: 48px;
`;

export const MovieOverview = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

export const MovieGenres = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const MovieGenresBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const MoviePoster = styled.img`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: black;
  width: 100px;
  background-color: #f5deb3;
  padding: 4px 10px;
  border-radius: 30px;

  &:hover,
  &:focus {
    background-color: #daa520;
  }
`;

export const MovieLinkBox = styled.ul`
  display: flex;
  gap: 26px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  list-style: none;
  font-size: 18px;
  font-weight: 700;
`;

export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }

  &:hover,
  &:focus {
    color: orange;
  }
`;
