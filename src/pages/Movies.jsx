import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const moviesName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (moviesName === '') {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5a1111e9d2c7100474f9cf656ec9c27e&language=en-US&query=${moviesName}&page=1&include_adult=false`
    )
      .then(r => r.json())
      .then(r => setSearchMovies(r));
  }, [moviesName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"></input>
        <button type="submit">Search</button>
      </form>
      {movies.length !== 0 && (
        <ul>
          {movies.results.map(movie => (
            <Link to={`${movie.id}`} state={{ from: location }} key={movie.id}>
              <li>{movie.original_title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Movies;
