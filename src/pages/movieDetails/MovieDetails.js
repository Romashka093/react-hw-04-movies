import React, { Component, lazy, Suspense } from 'react';
import moviesAPI from '../../services/movies-api';
import { Route, NavLink, Switch } from 'react-router-dom';
// import Cast from './cast/Cast';
// import Reviews from './reviews/Reviews';
import css from './MovieDetails.module.css';
import Spinner from '../../components/spinner/Spinner';
import Button from '@material-ui/core/Button';

const Cast = lazy(() =>
  import('./cast/Cast' /* webpackChunkName: "CastPage" */),
);
const Reviews = lazy(() =>
  import('./reviews/Reviews' /* webpackChunkName: "ReviewsPage" */),
);

const getMovieId = props => props.match.params.movieId;
class MovieDetails extends Component {
  state = {
    movie: [],
    info: '',
    reviews: [],
    actors: [],
  };

  componentDidMount() {
    const id = getMovieId(this.props);
    moviesAPI.getMovieDetails(id).then(movie =>
      this.setState({
        movie: movie.data,
        info: this.props.location.state,
        id,
      }),
    );
  }

  gandleGetActors = () => {
    moviesAPI
      .getActorsFromMovie(this.state.id)
      .then(actors => this.setState({ actors }));
  };

  handleGetReviews = () => {
    moviesAPI
      .getReviewsOfMovie(this.state.id)
      .then(reviews => this.setState({ reviews: reviews.data.results }));
  };

  handleChangeButton = () => {
    this.props.history.push({
      pathname: this.state.info.from,
      search: this.state.info.query,
    });
  };

  render() {
    const { movie, reviews, actors } = this.state;
    const ganres = movie.genres;

    return (
      <div>
        {movie && (
          <div>
            <Button
              onClick={this.handleChangeButton}
              type="submit"
              size="large"
              variant="outlined"
              color="primary"
            >
              &#8592; Go back
            </Button>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt=""
            />

            <section>
              <h2>{movie.title}</h2>
              <span>{movie.original_title}</span>
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
                  <NavLink
                    to={{
                      pathname: `/movies/${this.props.match.params.movieId}/cast`,
                    }}
                    onClick={this.gandleGetActors}
                    id={movie.id}
                    activeClassName={css.activeLink}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `/movies/${this.props.match.params.movieId}/reviews`,
                    }}
                    onClick={this.handleGetReviews}
                    id={movie.id}
                    activeClassName={css.activeLink}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </section>
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route
                  path="/movies/:movieId/cast"
                  render={() => <Cast actors={actors} />}
                />
                <Route
                  path="/movies/:movieId/reviews"
                  render={() => <Reviews reviews={reviews} />}
                />
              </Switch>
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;
