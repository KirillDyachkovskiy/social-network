import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { App } from './components';

const render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode >,
        document.getElementById('root')
    );
}

export { render }