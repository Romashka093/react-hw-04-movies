import React from 'react';
// import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    reviews && (
      <div>
        {reviews.length ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          <h2>
            No reviews for this movie for today, please come back later 🎭
          </h2>
        )}
      </div>
    )
  );
};

export default Reviews;
