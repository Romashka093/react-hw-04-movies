import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesItem extends Component {
  state = {};
  render() {
    const { movies } = this.props;
    return (
      <ul>
        {movies.length !== 0 && (
          <>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  id={movie.id}
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: {
                      from: this.props.match.url,
                      query: this.props.location.search,
                    },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    );
  }
}

export default MoviesItem;
