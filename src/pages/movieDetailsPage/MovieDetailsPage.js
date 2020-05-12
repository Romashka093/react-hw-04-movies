import React, { Component, Fragment } from 'react';
import { Cast } from './cast/Cast';
import { Reviews } from './reviews/Reviews';
import { Route, Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import moviesAPI from '../../services/movies-api';

// import css from './MovieDetailsPage.module.css';

// let ganresItems;
// if (movie) {
// 	ganresItems = movie.map((ganre) => {
// 		return <li key={ganre.id}>{ganre.name}</li>;
// 	});
// 	return <li>{ganresItems}</li>;
// }

class MovieDetailsPage extends Component {
  state = {
    movie: [],
  };

  componentDidMount() {
    const id = this.getMovieId(this.props);
    moviesAPI
      .getMovieDetails(id)
      .then(movie => this.setState({ movie: movie.data, id }));
    console.log('componentDidMount');
    // console.log(this.state.movie.genres.length);
  }

  getMovieId = props => props.match.params.movieId;

  render() {
    console.log(this.state);
    console.log('match: ', this.props.match);
    const { movie } = this.state;
    console.log('movie: ', movie);
    const ganres = movie.genres;
    console.log(ganres);

    return (
      <div>
        {movie && (
          <Fragment>
            <button>&#8592; Go back</button>
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
                {/* <p>{ganres[0]}</p> */}
                {/* {movie.ganres !== 0 && (
									<Fragment>
										{movie.ganres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
									</Fragment>
								)} */}
              </ul>
            </section>
            <section>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="/movies/:movieId/cast">Cast</Link>
                </li>
                <li>
                  <Link to="/movies/:movieId/reviews">Reviews</Link>
                </li>
              </ul>
            </section>
            {/* <Switch> */}
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
            {/* </Switch> */}
          </Fragment>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
