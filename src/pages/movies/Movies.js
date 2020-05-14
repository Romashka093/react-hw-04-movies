import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import queryString from 'query-string';
import MoviesItem from '../../components/moviesItem/MoviesItem';
// import css from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    const searchParam = queryString.parse(this.props.location.search);
    console.log('this.props', this.props.location.search);
    console.log(searchParam.query);

    if (searchParam.query) {
      this.serchMovies(searchParam.query);
    }
  }

  componentDidUpdate(prevProps) {
    const prevParam = queryString.parse(prevProps.location.search);
    const searchParam = queryString.parse(this.props.location.search);
    if (prevParam.query !== searchParam.query) {
      this.serchMovies(searchParam.query);
    }
  }

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
    this.props.history.push({
      search: `?query=${this.state.searchQuery}`,
    });
    this.serchMovies(this.state.searchQuery);
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
            name="search"
          />
          <button type="submit">Search</button>
        </form>
        {movies && <MoviesItem {...this.props} movies={movies} />}
      </div>
    );
  }
}

export default Movies;
