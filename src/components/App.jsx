import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppNav } from './AppStyle';
import { AppLink } from './AppStyle';

const Movies = lazy(() => import('pages/Movies'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Review = lazy(() => import('./MovieDetails/Review'));
const Cast = lazy(() => import('./MovieDetails/Cast'));
console.log(Movies);

export const App = () => {
  return (
    <div>
      <AppNav>
        <AppLink to="/" end>
          Home
        </AppLink>
        <AppLink to="/movies">Movies</AppLink>
      </AppNav>
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
