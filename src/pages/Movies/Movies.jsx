import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box } from 'components/box/Box';
import { MoviesForm, MoviesUlBox, MovieImg, MovieLink } from './MoviesStyle';
import { MovieFetch } from 'fetch/MovieFetch';

const Movies = () => {
  const [movies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const moviesName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (moviesName === '') {
      return;
    }
    MovieFetch(moviesName).then(r => setSearchMovies(r));
  }, [moviesName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <Box width="1280px" marginLeft="auto" marginRight="auto">
      <MoviesForm onSubmit={handleSubmit}>
        <input type="text" name="name"></input>
        <button type="submit">Search</button>
      </MoviesForm>
      {movies.length !== 0 && (
        <MoviesUlBox>
          {movies.results.map(movie => (
            <MovieLink
              to={`${movie.id}`}
              state={{ from: location }}
              key={movie.id}
            >
              <li>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width="300"
                ></MovieImg>
                {movie.original_title}
              </li>
            </MovieLink>
          ))}
        </MoviesUlBox>
      )}
    </Box>
  );
};
export default Movies;
