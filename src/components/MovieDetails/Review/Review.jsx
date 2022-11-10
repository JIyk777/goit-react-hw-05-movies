import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewFetch } from 'fetch/ReviewFetch';

const Review = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    ReviewFetch(movieId).then(r => setReviews(r));
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
