import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { store } from './redux';
import { App } from './components';
import { Provider } from './storeContext';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode >,
        document.getElementById('root')
    );
}

store.subscribe(render);

render();
