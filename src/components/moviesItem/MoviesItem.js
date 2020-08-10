import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'inline-table',
    maxWidth: 300,
    marginBottom: 10,
    marginTop: 10,
  },
  cardsArea: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default function MoviesItem({ movies, match, location }) {
  const classes = useStyles();

  return (
    <div>
      {movies.length !== 0 && (
        <ul className={classes.cardsArea}>
          {movies.map(movie => (
            <li key={movie.id} className={classes.root}>
              <Card elevation={3}>
                <CardActionArea>
                  <Link
                    id={movie.id}
                    to={{
                      pathname: `movies/${movie.id}`,
                      state: {
                        from: match.url,
                        query: location.search,
                      },
                    }}
                  >
                    <div>
                      <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={`movie poster: ${movie.title}`}
                      />
                    </div>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
