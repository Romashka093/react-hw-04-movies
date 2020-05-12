import React, { Component } from 'react';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { NavLink, Switch, Route, Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import moviesAPI from '../../services/movies-api';

// import css from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
  };

  componentDidMount() {
    const id = this.getMovieId(this.props);
    moviesAPI
      .getMovieDetails(id)
      .then(movie => this.setState({ movie: movie.data }));
  }

  getMovieId = props => props.match.params.movieId;

  render() {
    console.log(this.props.match);
    const { movie } = this.state;
    console.log(movie.genres);

    // const ganreToSee = movie.genres.map(ganre => {
    //   return ganre.name;
    // });
    // console.log(ganreToSee);

    return (
      <div>
        {movie !== 0 && (
          <>
            <button>&#8592; Go back</button>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt=""
            />
            /
            <section>
              <h2>{movie.title}</h2>
              <span>(Original: {movie.original_title})</span>
              <p>User score: {Math.round(movie.popularity)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview} </p>
              <h4>Genres</h4>
              {/* <ul>
                {movie.genres !== 0 && (
                  <>
                    {movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </>
                )}
              </ul> */}
            </section>
            <section>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link>Cast</Link>
                </li>
                <li>
                  <Link>Reviews</Link>
                </li>
              </ul>
            </section>
            {/* <Switch> */}
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            {/* </Switch> */}
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
