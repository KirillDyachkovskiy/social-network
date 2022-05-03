import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { friendsReducer } from './reducers/friendsReducer';
import { chatReducer } from './reducers/chatReducer';
import { profileReducer } from './reducers/profileReducer';

const reducers = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  friends: friendsReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import filtersSlice from './filtersSlice';
// import { todosApi } from './todosApi';
//
// const store = configureStore({
//   reducer: {
//     filters: filtersSlice.reducer,
//     [todosApi.reducerPath]: todosApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(todosApi.middleware),
// });
//
// export type RootState = ReturnType<typeof store.getState>;
// export const selectActiveListId = (state: RootState) =>
//   state.filters.activeListId;
//
// export default store;
