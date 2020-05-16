import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import css from './MoviesItem.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

export default class MoviesItem extends Component {
  classes = () => {
    const classes = useStyles();
    return classes;
  };

  render() {
    const { movies } = this.props;
    return (
      <div>
        <Card className={this.classes.root}>
          {movies.length !== 0 && (
            <ul>
              {movies.map(movie => (
                <li className={css.cardActionArea} key={movie.id}>
                  <CardActionArea>
                    <Link
                      id={movie.id}
                      to={{
                        pathname: `movies/${movie.id}`,
                        state: {
                          from: this.props.match.url,
                          query: this.props.location.search,
                        },
                      }}
                    >
                      <div className={css.movieTitle}>
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
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    );
  }
}

// export default MoviesItem;
// export default function ImgMediaCard() {

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
// component="img"
// alt="Contemplative Reptile"
// height="140"
// image="/static/images/cards/contemplative-reptile.jpg"
// title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
