import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Spinner from './components/spinner/Spinner';

const Home = lazy(() =>
  import('./pages/maine/Home' /* webpackChunkName: "HomePage" */),
);
const Movies = lazy(() =>
  import('./pages/movies/Movies' /* webpackChunkName: "MoviePage" */),
);
const MovieDetails = lazy(() =>
  import(
    './pages/movieDetails/MovieDetails' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const Notification = lazy(() =>
  import(
    './components/notification/Notification' /* webpackChunkName: "NotFoundPage" */
  ),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route component={Notification} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
