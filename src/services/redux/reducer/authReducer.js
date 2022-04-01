import {authAPI, securityAPI} from "../../api";

const SET_USER_DATA = 'auth/setData';
const setUserData = (data) => ({type: SET_USER_DATA, data});

const SET_CAPTCHA = 'auth/captcha';
const setCaptchaSuccess = (data) => ({type: SET_CAPTCHA, data});

export const authMe = () => async (dispatch) => {
  const response = await authAPI.authMe();
  dispatch(setUserData(response.data.data));
}

export const authLogIn = (formData) => async (dispatch) => {
  const response = await authAPI.authLogIn(formData);
  if (response.data.resultCode === 0) {
    dispatch(authMe());
  }
  if (response.data.resultCode === 10) {
    dispatch(setCaptcha());
  }
}

export const authLogOut = () => async (dispatch) => {
  const response = await authAPI.authLogOut();
  if (response.data.resultCode === 0) {
    dispatch(authMe());
  }
}

export const setCaptcha = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  dispatch(setCaptchaSuccess(response.data.url));
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
  authedUserData: null,
  captcha: null,
};

export const getUserData = (state) => state.auth.authedUserData;
export const getSidebar = (state) => state.auth.sidebar;
export const getCaptcha = (state) => state.auth.captcha;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        authedUserData: action.data,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.data,
      };
    default:
      return state;
  }
}
