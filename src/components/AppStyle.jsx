import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppNav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  font-size: 20px;
`;

export const AppLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
