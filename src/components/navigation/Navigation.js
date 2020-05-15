import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
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
    </nav>
  );
}

export default Navigation;
