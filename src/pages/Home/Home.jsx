import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeUl, HomeLink, HomeTitle, HomeLi, HomeImg } from './HomeStyle';
import { Box } from 'components/box/Box';
import { HomeFetch } from 'fetch/HomeFetch';

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    HomeFetch().then(r => setAllMovies(r.results));
  }, []);
  return (
    <Box width="1280px" marginLeft="auto" marginRight="auto">
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
    </Box>
  );
};

export default Home;
