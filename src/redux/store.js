import { createStore, combineReducers } from 'redux';
import { usersReducer } from './reducer/usersReducer';
import { messengerReducer } from './reducer/messengerReducer';
import { profileReducer } from './reducer/profileReducer';
import { sidebarReducer } from './reducer/sidebarReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
    profile: profileReducer,
    messenger: messengerReducer,
    users: usersReducer,
});

export const store = createStore(reducers);
