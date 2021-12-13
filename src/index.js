import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { store } from './redux/index';
import { App } from './components';

const { state, dispatch } = store;

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={dispatch.bind(store)} />
        </React.StrictMode >,
        document.getElementById('root')
    );
}

store.subscribe(render)
store.notify()