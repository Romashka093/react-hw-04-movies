import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import globalCss from '../../index.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35%',
    },
    '& .MuiButton-outlinedPrimary': {
      border: '2px solid #3f51b5',
    },
    '& .MuiButton-outlinedSizeLarge': {
      padding: '13px 21px',
    },
  },
}));

export default function MoviesSearcher({
  handleSubmit,
  searchQuery,
  handleChange,
}) {
  const classes = useStyles();
  return (
    <Paper className={globalCss.conteiner} elevation={3}>
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-search"
          label="Movie name"
          type="search"
          variant="outlined"
          autoFocus
          value={searchQuery}
          onChange={handleChange}
          name="search"
        />
        <Button type="submit" size="large" variant="outlined" color="primary">
          Search
        </Button>
      </form>
    </Paper>
  );
}
