import React, { Component } from 'react';
import moviesAPI from '../../../services/movies-api';
// import css from './Reviews.module.css';

// moviesAPI.getReviewsOfMovie()

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = this.getMovieId(this.props);
    moviesAPI
      .getReviewsOfMovie(id)
      .then(reviews => this.setState({ reviews: reviews.data.results }));
  }

  getMovieId = props => props.match.params.movieId;

  render() {
    const { reviews } = this.state;
    console.log(reviews);
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
  }
}

export default Reviews;
