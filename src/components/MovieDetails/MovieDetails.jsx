import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5a1111e9d2c7100474f9cf656ec9c27e&language=en-US`
    )
      .then(r => r.json())
      .then(r => setMovie(r))
      .catch(r => console.log(r));
  }, [movieId]);
  if (!movie) {
    return;
  }
  console.log(movie);
  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
      {movie.status_code === 34 ? (
        <div>Error</div>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          ></img>

          <h2>{movie.original_title}</h2>

          <div>
            <span>Overview</span>
            <p>{movie.overview}</p>
          </div>

          <div>
            <p>Genres</p>
            {movie.genres.map(item => (
              <span key={item.name}>{item.name}</span>
            ))}
          </div>

          <ul>
            <Link to="cast" state={{ from: backLinkHref }}>
              <li>Cast</li>
            </Link>
            <Link to="review" state={{ from: backLinkHref }}>
              <li>Review</li>
            </Link>
          </ul>

          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
