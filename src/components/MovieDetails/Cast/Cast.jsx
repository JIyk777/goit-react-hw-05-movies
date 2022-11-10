import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastBox, AuthorBox } from './CastStyle';
import { CastFetch } from 'fetch/CastFetch';

const Cast = () => {
  const [credits, setCredits] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    CastFetch(movieId).then(r => setCredits(r));
  }, [movieId]);
  if (!credits) {
    return;
  }
  return (
    <CastBox>
      {credits.cast.map(item => (
        <AuthorBox key={item.id}>
          <>
            {item.profile_path === null ? (
              <img
                src="https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg"
                alt=""
                width="200px"
                height="300px"
              ></img>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt=""
              ></img>
            )}

            <p>Name: {item.name}</p>
            <p>Character: {item.character}</p>
          </>
        </AuthorBox>
      ))}
    </CastBox>
  );
};
export default Cast;
