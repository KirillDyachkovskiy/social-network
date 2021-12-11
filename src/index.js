import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { App } from './components';
import { state } from './redux';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode >,
  document.getElementById('root')
);
