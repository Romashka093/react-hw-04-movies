import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
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
  );
}

export default Navigation;
