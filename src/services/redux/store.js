import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './reducer/authReducer';
import {friendsReducer} from './reducer/friendsReducer';
import {messengerReducer} from './reducer/messengerReducer';
import {profileReducer} from './reducer/profileReducer';
import {sidebarReducer} from './reducer/sidebarReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  sidebar: sidebarReducer,
  profile: profileReducer,
  messenger: messengerReducer,
  friends: friendsReducer,
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store