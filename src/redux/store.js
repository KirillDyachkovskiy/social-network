import { createStore, combineReducers } from 'redux';
import { friendsReducer } from './reducer/friendsReducer';
import { messengerReducer } from './reducer/messengerReducer';
import { profileReducer } from './reducer/profileReducer';
import { sidebarReducer } from './reducer/sidebarReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
    profile: profileReducer,
    messenger: messengerReducer,
    friends: friendsReducer,
});

export const store = createStore(reducers);
