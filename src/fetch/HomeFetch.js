import { ApiKey } from 'ApiKey/ApiKey';

export const HomeFetch = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`
  ).then(r => r.json());
};
