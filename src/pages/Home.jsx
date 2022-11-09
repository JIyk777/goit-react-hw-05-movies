import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5a1111e9d2c7100474f9cf656ec9c27e'
    )
      .then(r => r.json())
      .then(r => setAllMovies(r.results));
  }, []);
  return (
    <ul>
      <h2>Trending today</h2>
      {allMovies.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          state={{ from: location }}
          key={movie.id}
        >
          <li>
            {movie.title}
            {movie.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Home;
