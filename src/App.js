import React, { Component } from 'react';
import { Navigation } from './components/navigation/Navigation';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import MovieDetailsPage from './pages/movieDetailsPage/MovieDetailsPage';
import { Notification } from './components/notification/Notification';
// import * as moviesAPI from './services/movies-api'

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={Notification} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
