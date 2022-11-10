import { ApiKey } from 'ApiKey/ApiKey';

export const CastFetch = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`
  ).then(r => r.json());
};
