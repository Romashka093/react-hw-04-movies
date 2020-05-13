import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export default {
  async getTrendingMovies() {
    try {
      const movies = await axios
        .get(`/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`)
        .then(movies => movies.data.results);
      console.log(movies);
      return movies;
    } catch (error) {
      console.log(error);
    }
  },

  async getMoviesBySearch(query) {
    try {
      const movie = await axios.get(
        `/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}&page=1&include_adult=false`,
      );
      console.log(movie);
      return movie;
    } catch (error) {
      console.log(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const details = await axios.get(
        `/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}`,
      );
      console.log(details);
      return details;
    } catch (error) {
      console.log(error);
    }
  },
  async getActorsFromMovie(id = 12) {
    try {
      const actors = await axios
        .get(`/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`)
        .then(actors => actors.data.cast);
      console.log(actors);
      return actors;
    } catch (error) {
      console.log(error);
    }
  },
  async getReviewsOfMovie(id = 12) {
    try {
      const reviews = await axios.get(
        `/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_KEY}`,
      );
      console.log(reviews);
      return reviews;
    } catch (error) {
      console.log(error);
    }
  },
};

// export const getTrendingMovies = () => axios.get(`/3/trending/movie/week?api_key=${process.env.REACT_APP_KEY}`);
// console.log(getTrendingMovies());

// export const getMoviesBySearch = (searchQuery) =>
// 	axios.get(`/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${searchQuery}&page=1&include_adult=false`);
// console.log(getMoviesBySearch());

// export const getMovieDetails = (movieId = 12) => axios.get(`/3/movie/${movieId}?api_key=${process.env.REACT_APP_KEY}`);
// console.log(getMovieDetails());

// export const getActorsFromMovie = (movieId = 12) =>
// 	axios.get(`/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_KEY}`);
// console.log(getActorsFromMovie());

// export const getReviewsOfMovie = (movieId = 12) =>
// 	axios.get(`/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_KEY}`);
// console.log(getReviewsOfMovie());
