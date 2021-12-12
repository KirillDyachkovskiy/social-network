import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { state } from './redux/index';
import { App } from './components';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode >,
        document.getElementById('root')
    );
}

state.register(render)
state.notify()