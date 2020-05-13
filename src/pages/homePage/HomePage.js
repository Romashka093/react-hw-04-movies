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
    console.log(trendingMovies);
    console.log('this.props HOME', this.props);
    return (
      <div>
        <h2>Trending today</h2>
        <ul>
          {trendingMovies.length !== 0 ? (
            <>
              {trendingMovies.map(movie => (
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
          ) : (
            ''
          )}
        </ul>
      </div>
    );
  }
}

export default HomePage;
