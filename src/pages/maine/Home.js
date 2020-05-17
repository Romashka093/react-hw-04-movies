import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import MoviesItem from '../../components/moviesItem/MoviesItem';
import Spinner from '../../components/spinner/Spinner';
import { Typography } from '@material-ui/core';

class Home extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    moviesAPI.getTrendingMovies().then(trendingMovies => {
      this.setState({ trendingMovies });
    });
  }

  render() {
    const { trendingMovies } = this.state;
    return (
      <div>
        <Typography
          align="center"
          color="textSecondary"
          variant="h3"
          component="h2"
        >
          Trending movies for today
        </Typography>

        {trendingMovies ? (
          <MoviesItem {...this.props} movies={trendingMovies} />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Home;
