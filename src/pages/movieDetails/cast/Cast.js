import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import default_avatar from '../user.svg';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    paddingBottom: '5px',
    marginBottom: '20px',
    '& .MuiCardMedia-img': {
      width: '200px',
      height: '300px',
    },
  },
});

const Cast = ({ actors }) => {
  const classes = useStyles();
  return (
    actors && (
      <Box component="div" display="flex" className={classes.root}>
        {actors.length ? (
          <ul className={classes.cards}>
            {actors.map(actor => (
              <li key={actor.cast_id}>
                <Card className={classes.card}>
                  {actor.profile_path ? (
                    <CardMedia
                      component="img"
                      alt={`portrait of ${actor.name}`}
                      image={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      title={actor.name}
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      alt={`portrait of ${actor.name}`}
                      image={default_avatar}
                      title={actor.name}
                    />
                  )}

                  <Typography gutterBottom color="textPrimary" component="h2">
                    {actor.name}
                  </Typography>
                  <Typography gutterBottom color="textSecondary" component="p">
                    {actor.character}
                  </Typography>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          <h2>No actors for this movie for today, please come back later 🎬</h2>
        )}
      </Box>
    )
  );
};

export default Cast;
