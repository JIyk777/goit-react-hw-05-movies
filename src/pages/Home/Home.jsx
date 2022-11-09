import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeUl, HomeLink, HomeTitle, HomeLi, HomeImg } from './HomeStyle';

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
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <HomeUl>
        {allMovies.map(movie => (
          <HomeLink
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            key={movie.id}
          >
            <HomeLi>
              <HomeImg
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width="300"
              ></HomeImg>
              <span>
                {movie.title}
                {movie.name}
              </span>
            </HomeLi>
          </HomeLink>
        ))}
      </HomeUl>
    </div>
  );
};

export default Home;
