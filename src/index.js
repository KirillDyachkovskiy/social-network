import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { store } from './redux';
import { App } from './components';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode >,
        document.getElementById('root')
    );
}

store.subscribe(render);

render();

window.state = store.getState();
