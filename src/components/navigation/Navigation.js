import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import globalCss from '../../index.module.css';

const useStyles = makeStyles({
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
  activeLink: {
    color: '#3f51b5',
    fontWeight: 'bold',
  },
});

export default function Navigation() {
  const classes = useStyles();
  return (
    <nav className={globalCss.conteiner}>
      <Paper className={classes.root} elevation={3}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.activeLink}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName={classes.activeLink}>
              movies
            </NavLink>
          </li>
        </ul>
      </Paper>
    </nav>
  );
}
