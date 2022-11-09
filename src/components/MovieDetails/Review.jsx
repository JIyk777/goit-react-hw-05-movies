import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5a1111e9d2c7100474f9cf656ec9c27e&language=en-US&page=1`
    )
      .then(r => r.json())
      .then(r => setReviews(r));
  }, [movieId]);
  if (!reviews) {
    return;
  }
  return (
    <div>
      {reviews.results.length !== 0 ? (
        reviews.results.map(review => (
          <div key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <div>We don`t have any reviews for this movie</div>
      )}
    </div>
  );
};

export default Review;
