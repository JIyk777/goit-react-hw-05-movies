import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Box } from 'components/box/Box';
import {
  MovieTitle,
  MovieOverview,
  MovieGenres,
  MovieGenresBox,
  MoviePoster,
  BackBtn,
  MovieLinkBox,
  MovieLink,
} from './MovieDetailsStyle';
import { MovieDetailsFetch } from 'fetch/MovieDetailsFetch';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    MovieDetailsFetch(movieId)
      .then(r => setMovie(r))
      .catch(r => console.log(r));
  }, [movieId]);
  if (!movie) {
    return;
  }

  return (
    <Box width="1280px" marginLeft="auto" marginRight="auto" padding="30px">
      <BackBtn to={backLinkHref}>Go Back</BackBtn>
      {movie.status_code === 34 ? (
        <div>Error</div>
      ) : (
        <>
          <Box
            display="flex"
            width="1280px"
            marginLeft="auto"
            marginRight="auto"
            padding="30px"
            justifyContent="center"
          >
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""
            ></MoviePoster>
            <Box marginLeft="50px" width="50%">
              <MovieTitle>{movie.original_title}</MovieTitle>

              <div>
                <MovieOverview>Overview</MovieOverview>
                <p>{movie.overview}</p>
              </div>

              <div>
                <MovieGenres>Genres</MovieGenres>
                <MovieGenresBox>
                  {movie.genres.map(item => (
                    <span key={item.name}>{item.name}</span>
                  ))}
                </MovieGenresBox>
              </div>
            </Box>
          </Box>

          <MovieLinkBox>
            <MovieLink to="cast" state={{ from: backLinkHref }}>
              <li>Cast</li>
            </MovieLink>
            <MovieLink to="review" state={{ from: backLinkHref }}>
              <li>Review</li>
            </MovieLink>
          </MovieLinkBox>

          <Outlet />
        </>
      )}
    </Box>
  );
};

export default MovieDetails;
