import { ApiKey } from 'ApiKey/ApiKey';

export const MovieDetailsFetch = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
  ).then(r => r.json());
};
