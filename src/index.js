import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { store } from './redux';
import { App } from './components';


const MyContext = React.createContext(store);

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MyContext>
                <App store={store} />
            </MyContext>
        </React.StrictMode >,
        document.getElementById('root')
    );
}

store.subscribe(render);

render();
