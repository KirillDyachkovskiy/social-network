import { authAPI } from "../../api";

const SET_AUTHED_USER_DATA = 'SET_USER_DATA';
export const setAuthedUserData = (data) => ({ type: SET_AUTHED_USER_DATA, data, });

export const authMe = () => (dispatch) => {
  authAPI.authMe()
    .then(({ data }) => dispatch(setAuthedUserData(data)));
}

export const authLogIn = (formData) => (dispatch) => {
  authAPI.authLogIn(formData)
    .then(() => dispatch(authMe()));
}

export const authLogOut = () => (dispatch) => {
  authAPI.authLogOut()
    .then(() => dispatch(authMe()));
}

const initialState = {
  data: {},
};

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