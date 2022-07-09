import { AnyAction, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { AuthData, LoginMeReq, ResultCode, TCaptcha } from '../../types/Api';
import { authService, securityService } from '../../api/Api';

const setUserData = (Req: AuthData): AnyAction => ({
  type: 'auth/setData',
  Req,
});
const setCaptchaSuccess = (Req: TCaptcha): AnyAction => ({
  type: 'auth/captcha',
  Req,
});

export const setCaptcha = () => async (dispatch: Dispatch) => {
  const Res = await securityService.getCaptcha();

  dispatch(setCaptchaSuccess(Res.data.url));
};

export const authMe =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const Res = await authService.me();

    if (Res.data.resultCode === ResultCode.Success) {
      dispatch(setUserData(Res.data.data));
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
    formData: LoginMeReq
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const Res = await authService.login(formData);

    if (Res.data.resultCode === ResultCode.Success) {
      await dispatch(authMe());
    }
    if (Res.data.resultCode === ResultCode.CaptchaRequired) {
      await dispatch(setCaptcha());
    }
  };

export const authLogOut =
  (): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const Res = await authService.logout();

    console.log(Res);

    if (Res.data.resultCode === ResultCode.Success) {
      await dispatch(authMe());
    }
  };

type AuthState = {
  authedUserData: AuthData;
  captcha: TCaptcha | null;
};

const initialState: AuthState = {
  authedUserData: {
    id: null,
    email: null,
    login: null,
  },
  captcha: null,
};

export const getUserData = (state: RootState) => state.auth.authedUserData;
export const getCaptcha = (state: RootState) => state.auth.captcha;

export const authReducer = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case 'auth/setData':
      return {
        ...state,
        authedUserData: action.Req,
      };

    case 'auth/captcha':
      return {
        ...state,
        captcha: action.Req,
      };

    default:
      return state;
  }
};
