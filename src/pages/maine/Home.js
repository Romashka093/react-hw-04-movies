import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import MoviesItem from '../../components/moviesItem/MoviesItem';
import Spinner from '../../components/spinner/Spinner';

// import css from './Home.module.css';

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
    console.log(trendingMovies);
    console.log('this.props HOME', this.props);
    return (
      <div>
        <h2>Trending today</h2>
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
