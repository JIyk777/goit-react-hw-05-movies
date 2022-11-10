import { ApiKey } from 'ApiKey/ApiKey';

export const MovieFetch = name => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${name}&page=1&include_adult=false`
  ).then(r => r.json());
};
