import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { friendsReducer } from './reducers/friendsReducer';
import { chatReducer } from './reducers/chatReducer';
import { profileReducer } from './reducers/profileReducer';

const reducers = combineReducers({
  profile: profileReducer,
  messenger: chatReducer,
  friends: friendsReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export default store;
