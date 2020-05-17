import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import queryString from 'query-string';
import MoviesSearcher from './MoviesSearcher';
import MoviesItem from '../../components/moviesItem/MoviesItem';

class Movies extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const searchParam = queryString.parse(this.props.location.search);

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
        <MoviesSearcher
          handleSubmit={this.handleSubmit}
          searchQuery={searchQuery}
          handleChange={this.handleChange}
        />
        {movies && <MoviesItem {...this.props} movies={movies} />}
      </div>
    );
  }
}

export default Movies;
