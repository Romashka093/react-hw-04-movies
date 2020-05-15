import React, { Component } from 'react';
import moviesAPI from '../../services/movies-api';
import queryString from 'query-string';
import MoviesItem from '../../components/moviesItem/MoviesItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-search"
            label="Movie name"
            type="search"
            variant="outlined"
            autoFocus
            value={searchQuery}
            onChange={this.handleChange}
            name="search"
          />
          <Button type="submit" size="large" variant="outlined" color="primary">
            Search
          </Button>
        </form>
        {movies && <MoviesItem {...this.props} movies={movies} />}
      </div>
    );
  }
}

export default Movies;
