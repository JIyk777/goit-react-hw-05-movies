import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [credits, setCredits] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5a1111e9d2c7100474f9cf656ec9c27e&language=en-US`
    )
      .then(r => r.json())
      .then(r => setCredits(r));
  }, [movieId]);
  if (!credits) {
    return;
  }
  return (
    <div>
      {credits.cast.map(item => (
        <div key={item.id}>
          {item.profile_path && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt=""
              ></img>
              <p>Name: {item.name}</p>
              <p>Character: {item.character}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
export default Cast;
