import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '0 10px 20px 10px',
    // marginBottom: '20px'
  },
  border: {
    margin: '5px',
  },
});

function Reviews({ reviews }) {
  const classes = useStyles();
  return (
    reviews && (
      <div>
        {reviews.length ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <Card className={classes.root}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {review.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.border}
                  >
                    {review.content}
                  </Typography>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          <h2 className={classes.border}>
            No reviews for this movie for today, please come back later 🎭
          </h2>
        )}
      </div>
    )
  );
}

export default Reviews;
