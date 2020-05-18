import React, { Component, lazy, Suspense } from 'react';
import moviesAPI from '../../services/movies-api';
import { Route, NavLink, Switch } from 'react-router-dom';
import css from './MovieDetails.module.css';
import globalcss from '../../index.module.css';
import Spinner from '../../components/spinner/Spinner';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
      <Paper elevation={3}>
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
            <div className={globalcss.conteiner}>
              <div className={css.wrapItemDetails}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />

                <section>
                  <Typography variant="h2" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography color="textSecondary" component="p">
                    User score: {Math.round(movie.popularity)}%
                  </Typography>
                  <Typography variant="h4" component="h4">
                    Overview:
                  </Typography>
                  <Typography color="textSecondary" component="p">
                    {movie.overview}{' '}
                  </Typography>
                  <Typography variant="h5" component="h5">
                    Genres:{' '}
                  </Typography>
                  <ul>
                    {ganres
                      ? ganres.map(genre => (
                          <li key={genre.id}>{genre.name} </li>
                        ))
                      : null}
                  </ul>
                </section>
              </div>
            </div>
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
      </Paper>
    );
  }
}

export default MovieDetails;
