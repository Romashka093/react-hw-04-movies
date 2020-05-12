import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import { Link } from 'react-router-dom';
// import css from './HomePage.module.css';

class HomePage extends Component {
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
        <h2>Trending today</h2>
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
