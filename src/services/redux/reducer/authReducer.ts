import { AnyAction, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  AuthData,
  LoginMePayload,
  ResultCode,
  SidebarItem,
  TCaptcha,
} from '../../../types/Api';
import { authAPI, securityAPI } from '../../api';
import { RootState } from '../store';

const setUserData = (payload: AuthData): AnyAction => ({
  type: 'auth/setData',
  payload,
});
const setCaptchaSuccess = (payload: TCaptcha): AnyAction => ({
  type: 'auth/captcha',
  payload,
});

export const setCaptcha = () => async (dispatch: Dispatch) => {
  const response = await securityAPI.getCaptcha();

  dispatch(setCaptchaSuccess(response.data.url));
};

export const authMe =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const response = await authAPI.authMe();

    if (response.data.resultCode === ResultCode.Success) {
      dispatch(setUserData(response.data.data));
    } else {
      dispatch(
        setUserData({
          id: null,
          email: null,
          login: null,
        })
      );
    }
  };

export const authLogIn =
  (
    formData: LoginMePayload
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const response = await authAPI.authLogIn(formData);

    if (response.data.resultCode === ResultCode.Success) {
      await dispatch(authMe());
    }
    if (response.data.resultCode === ResultCode.CaptchaRequired) {
      await dispatch(setCaptcha());
    }
  };

export const authLogOut =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const response = await authAPI.authLogOut();

    if (response.data.resultCode === ResultCode.Success) {
      await dispatch(authMe());
    }
  };

type AuthState = {
  sidebar: Array<SidebarItem>;
  authedUserData: AuthData;
  captcha: TCaptcha | null;
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

export const getUserData = (state: RootState) => state.auth.authedUserData;
export const getSidebar = (state: RootState) => state.auth.sidebar;
export const getCaptcha = (state: RootState) => state.auth.captcha;

export const authReducer = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case 'auth/setData':
      return {
        ...state,
        authedUserData: action.payload,
      };

    case 'auth/captcha':
      return {
        ...state,
        captcha: action.payload,
      };

    default:
      return state;
  }
};
