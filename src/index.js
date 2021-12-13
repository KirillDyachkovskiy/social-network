import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { store } from './redux';
import { App } from './components';

const { state, dispatch } = store;

const render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={dispatch.bind(store)} />
        </React.StrictMode >,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    render(state)
})
store.notify()