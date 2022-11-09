import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lazy, Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const Movies = lazy(() => import('pages/Movies'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Review = lazy(() => import('./MovieDetails/Review'));
const Cast = lazy(() => import('./MovieDetails/Cast'));
console.log(Movies);

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
