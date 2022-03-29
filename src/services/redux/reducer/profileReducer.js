import {profileAPI} from "../../api";
import {getData} from "./authReducer";

const ADD_POST = 'profile/addPost';
export const addPost = (text) => ({type: ADD_POST, text});

const DELETE_POST = 'profile/deletePost';
export const deletePost = (id) => ({type: DELETE_POST, id});

const SET_VISITED_USER_PROFILE = 'profile/setVisitedUserProfile';
export const setVisitedUserProfile = (data) => ({type: SET_VISITED_USER_PROFILE, data});

const SET_USER_STATUS = 'profile/setUserStatus';
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

const CHANGE_PROFILE_FETCHING_STATUS = 'profile/changeProfileFetchingStatus';
export const changeProfileFetchingStatus = (isFetching) => ({type: CHANGE_PROFILE_FETCHING_STATUS, isFetching});

export const changeVisitedProfile = (id) => async (dispatch) => {
  const dataResponse = await profileAPI.getData(id);
  const statusResponse = await profileAPI.getStatus(id);
  dispatch(setVisitedUserProfile({...dataResponse.data}));
  dispatch(setUserStatus(statusResponse.data));
  dispatch(changeProfileFetchingStatus(false));
};

export const changeUserStatus = (status) => async (dispatch) => {
  await profileAPI.changeStatus(status);
  dispatch(setUserStatus(status));
};

export const changeAuthedUserAvatar = (id, avatar) => async (dispatch) => {
  const response = await profileAPI.changeAvatar(avatar);
  if (response.status === 200) {
    dispatch(changeVisitedProfile(id));
  }
};

export const changeUserInfo = (id, info) => async (dispatch) => {
  const response = await profileAPI.changeInfo(info);
  if (response.status === 200) {
    dispatch(changeVisitedProfile(id));
  }
};

const initialState = {
  posts: [
    {
      id: 0,
      likes: Math.ceil(Math.random() * 100),
      text: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл'
    },
    {
      id: 1,
      likes: Math.ceil(Math.random() * 100),
      text: 'Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн'
    },
    {
      id: 2,
      likes: Math.ceil(Math.random() * 100),
      text: 'Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский'
    },
    {
      id: 3,
      likes: Math.ceil(Math.random() * 100),
      text: 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан'
    },
  ],
  visitedProfile: {},
  isFetching: true,
};

export const getVisitedProfile = (state) => state.profile.visitedProfile;
export const getProfileIsFetching = (state) => state.profile.isFetching;
export const getPosts = (state) => state.profile.posts;

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: state.posts.length, likes: Math.ceil(Math.random() * 100), text: action.text,}],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item, id) => id !== action.id),
      };
    case SET_VISITED_USER_PROFILE:
      return {
        ...state,
        visitedProfile: {
          ...action.data,
          status: state.visitedProfile.status,
        }
      };
    case SET_USER_STATUS:
      return {
        ...state,
        visitedProfile: {
          ...state.visitedProfile,
          status: action.status,
        },
      };
    default:
      return state;
  }
}
