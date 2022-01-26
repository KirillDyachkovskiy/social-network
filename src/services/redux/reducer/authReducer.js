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
  data: null,
};

export const getData = (state) => state.auth.data;

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