import { createStore, combineReducers } from 'redux';
import { messengerReducer } from './reducer/messengerReducer';
import { profileReducer } from './reducer/profileReducer';
import { sidebarReducer } from './reducer/sidebarReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
    profile: profileReducer,
    messenger: messengerReducer,
});

export const store = createStore(reducers);
