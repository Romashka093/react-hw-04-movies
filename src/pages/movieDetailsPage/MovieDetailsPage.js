import React, { Component, Fragment } from 'react';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import { Route, Link, Switch } from 'react-router-dom';
import moviesAPI from '../../services/movies-api';

// import css from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    info: '',
  };

  componentDidMount() {
    const id = this.getMovieId(this.props);
    moviesAPI
      .getMovieDetails(id)
      .then(movie =>
        this.setState({ movie: movie.data, info: this.props.location.state }),
      );
  }

  getMovieId = props => props.match.params.movieId;

  handleChangeButton = () => {
    this.props.history.push({
      pathname: this.state.info.from,
      search: this.state.info.query,
    });
  };

  render() {
    const { movie } = this.state;
    const ganres = movie.genres;

    return (
      <div>
        {movie && (
          <Fragment>
            <button onClick={this.handleChangeButton}>&#8592; Go back</button>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt=""
            />

            <section>
              <h2>{movie.title}</h2>
              <span>(Original: {movie.original_title})</span>
              <p>User score: {Math.round(movie.popularity)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview} </p>
              <h4>Genres: </h4>
              <ul>
                {ganres
                  ? ganres.map(genre => <li key={genre.id}>{genre.name} </li>)
                  : null}
              </ul>
            </section>
            <section>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: `/movies/${this.props.match.params.movieId}/cast`,
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `/movies/${this.props.match.params.movieId}/reviews`,
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </section>
            <Switch>
              <Route path="/movies/:movieId/cast" component={Cast} />
              <Route path="/movies/:movieId/reviews" component={Reviews} />
            </Switch>
          </Fragment>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
