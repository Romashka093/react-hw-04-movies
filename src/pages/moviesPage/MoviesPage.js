import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import { Link } from 'react-router-dom';

// import css from './MoviesPage.module.css';

// moviesAPI.getMoviesBySearch()

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  serchMovies = searchQuery => {
    moviesAPI.getMoviesBySearch(searchQuery).then(movies =>
      this.setState({
        movies: movies.data.results,
      }),
    );
  };

  handleChange = evt => {
    this.setState({
      searchQuery: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery === '') {
      return;
    }
    this.serchMovies(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { movies, searchQuery } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter movie name"
            type="search"
            autoFocus
            value={searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.length !== 0 ? (
            <>
              {movies.map(movie => (
                <li key={movie.id}>
                  <Link id={movie.id} to={`/movies/${movie.id}`}>
                    {movie.title}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <li>
              <p>Try to enter movie name</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
