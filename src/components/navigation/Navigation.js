import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import css from './Navigation.module.css';
import globalCss from '../../index.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 50,
    marginTop: 20,
    '& > *': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      padding: 20,
      textTransform: 'uppercase',
      fontFamily: 'sans-serif',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: 2,
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  return (
    <nav className={globalCss.conteiner}>
      <Paper className={classes.root} elevation={3}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={css.activeLink}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName={css.activeLink}>
              movies
            </NavLink>
          </li>
        </ul>
      </Paper>
    </nav>
  );
}
