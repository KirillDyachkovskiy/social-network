import {authAPI} from "../../api";

const SET_AUTHED_USER_DATA = 'auth/setData';
export const setAuthedUserData = (data) => ({type: SET_AUTHED_USER_DATA, data,});

export const authMe = () => async (dispatch) => {
  const response = await authAPI.authMe();
  dispatch(setAuthedUserData(response.data));
}

export const authLogIn = (formData) => async (dispatch) => {
  await authAPI.authLogIn(formData);
  dispatch(authMe());
}

export const authLogOut = () => async (dispatch) => {
  await authAPI.authLogOut();
  dispatch(authMe());
}

const initialState = {
  sidebar: [
    {id: 0, to: '/', text: 'Profile'},
    {id: 1, to: '/messenger', text: 'Messenger'},
    {id: 2, to: '/news', text: 'News'},
    {id: 3, to: '/music', text: 'Music'},
    {id: 4, to: '/friends', text: 'Friends'},
    {id: 5, to: '/settings', text: 'Settings'},
  ],
  data: null,
};

export const getData = (state) => state.auth.data;
export const getSidebar = (state) => state.auth.sidebar;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHED_USER_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}