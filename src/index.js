import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { store } from './redux/index';
import { App } from './components';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.$state} />
        </React.StrictMode >,
        document.getElementById('root')
    );
}

store.register(render)
store.notify()