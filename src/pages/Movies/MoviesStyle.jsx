import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const MoviesUlBox = styled.ul`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 25px;
  list-style: none;
  flex-wrap: wrap;
  padding: 30px;
`;

export const MovieImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: black;
  width: calc((100% - 100px) / 5);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
