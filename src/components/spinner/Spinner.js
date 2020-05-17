import React from 'react';
import Loader from 'react-loader-spinner';
import css from './Spinner.module.css';

const Spinner = () => (
  <Loader
    className={css.Loader}
    type="ThreeDots"
    color="#3f51b5"
    height={150}
    width={150}
    timeout={123000}
  />
);

export default Spinner;
