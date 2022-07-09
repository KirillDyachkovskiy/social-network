import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { chatReducer } from './reducers/chatReducer';

const reducers = combineReducers({
  chat: chatReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export default store;
