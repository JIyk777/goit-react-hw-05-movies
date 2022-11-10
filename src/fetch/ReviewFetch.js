import { ApiKey } from 'ApiKey/ApiKey';

export const ReviewFetch = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey}&language=en-US&page=1`
  ).then(r => r.json());
};
