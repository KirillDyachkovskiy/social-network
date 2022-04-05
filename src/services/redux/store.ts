import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducer/authReducer';
import { friendsReducer } from './reducer/friendsReducer';
import { messengerReducer } from './reducer/messengerReducer';
import { profileReducer } from './reducer/profileReducer';

const reducers = combineReducers({
  profile: profileReducer,
  messenger: messengerReducer,
  friends: friendsReducer,
  auth: authReducer,
});

export type TStore = typeof reducers;
export type TState = ReturnType<TStore>;

export default createStore(reducers, applyMiddleware(thunkMiddleware));
