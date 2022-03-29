import {authAPI, securityAPI} from "../../api";

const SET_USER_DATA = 'auth/setData';
export const setUserData = (data) => ({type: SET_USER_DATA, data});

const SET_CAPTCHA = 'auth/captcha';
export const setCaptchaSuccess = (data) => ({type: SET_CAPTCHA, data});

export const authMe = () => async (dispatch) => {
  const response = await authAPI.authMe();
  dispatch(setUserData(response.data));
}

export const authLogIn = (formData) => async (dispatch) => {
  await authAPI.authLogIn(formData);
  dispatch(authMe());
}

export const authLogOut = () => async (dispatch) => {
  await authAPI.authLogOut();
  dispatch(authMe());
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
  data: null,
  captcha: null,
};

export const getData = (state) => state.auth.data;
export const getSidebar = (state) => state.auth.sidebar;
export const getCaptcha = (state) => state.auth.captcha;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.data,
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
