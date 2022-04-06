import { AnyAction } from 'redux';
import {
  AuthData,
  Captcha,
  LoginMePayload,
  SidebarItem,
} from '../../../types/Api';
import { authAPI, securityAPI } from '../../api';
import { TState } from '../store';

const SET_USER_DATA = 'auth/setData';
const setUserData = (payload: AuthData) => ({
  type: SET_USER_DATA,
  payload,
});

const SET_CAPTCHA = 'auth/captcha';
const setCaptchaSuccess = (payload: Captcha) => ({
  type: SET_CAPTCHA,
  payload,
});

export const setCaptcha = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptcha();

  dispatch(setCaptchaSuccess(response.data.url));
};

export const authMe = () => async (dispatch: any) => {
  const response = await authAPI.authMe();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(response.data.data));
  }
};

export const authLogIn =
  (formData: LoginMePayload) => async (dispatch: any) => {
    const response = await authAPI.authLogIn(formData);

    if (response.data.resultCode === 0) {
      dispatch(authMe());
    }
    if (response.data.resultCode === 10) {
      dispatch(setCaptcha());
    }
  };

export const authLogOut = () => async (dispatch: any) => {
  const response = await authAPI.authLogOut();

  if (response.data.resultCode === 0) {
    dispatch(authMe());
  }
};

type AuthState = {
  sidebar: Array<SidebarItem>;
  authedUserData: AuthData;
  captcha: Captcha | null;
};

const initialState: AuthState = {
  sidebar: [
    { id: 0, to: '/', text: 'Profile' },
    { id: 1, to: '/messenger', text: 'Messenger' },
    { id: 2, to: '/news', text: 'News' },
    { id: 3, to: '/music', text: 'Music' },
    { id: 4, to: '/friends', text: 'Friends' },
    { id: 5, to: '/settings', text: 'Settings' },
  ],
  authedUserData: {
    id: null,
    email: null,
    login: null,
  },
  captcha: null,
};

export const getUserData = (state: TState) => state.auth.authedUserData;
export const getSidebar = (state: TState) => state.auth.sidebar;
export const getCaptcha = (state: TState) => state.auth.captcha;

export const authReducer = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        authedUserData: action.payload,
      };

    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.payload,
      };

    default:
      return state;
  }
};
