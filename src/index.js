import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.module.css';

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.querySelector('#root'),
);
