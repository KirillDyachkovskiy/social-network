import { authAPI } from "../../api/api";

const SET_AUTHED_USER_DATA = 'SET_USER_DATA';
export const setAuthedUserData = (data, page) => ({ type: SET_AUTHED_USER_DATA, data, page, });

export const authMe = () => (dispatch) => {
    authAPI.authMe()
        .then(({ data }) => {
            dispatch(setAuthedUserData(data));
        });
}

const initialState = {
    data: null,
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