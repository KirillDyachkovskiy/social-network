import { AnyAction } from 'redux';
import { authAPI, profileAPI } from '../../api';
import {
  AuthData, ProfileInfoPayload, Status, UserId,
} from '../../../types/Api';

const ADD_POST = 'profile/addPost';
export const addPost = (text: string): AnyAction => ({ type: ADD_POST, text });

const DELETE_POST = 'profile/deletePost';
export const deletePost = (id: number): AnyAction => ({ type: DELETE_POST, id });

const SET_VISITED_USER_PROFILE = 'profile/setVisitedUserProfile';
export const setVisitedUserProfile = (data: AuthData): AnyAction => ({ type: SET_VISITED_USER_PROFILE, data });

const SET_USER_STATUS = 'profile/setUserStatus';
export const setUserStatus = (status: string): AnyAction => ({ type: SET_USER_STATUS, status });

const CHANGE_PROFILE_FETCHING_STATUS = 'profile/changeProfileFetchingStatus';
export const changeProfileFetchingStatus = (isFetching: boolean): AnyAction => ({ type: CHANGE_PROFILE_FETCHING_STATUS, isFetching });

export const changeVisitedProfile = (id: UserId) => async (dispatch: any) => {
  const dataResponse = await profileAPI.getUserData(id);
  if (dataResponse.status === 200) {
    dispatch(setVisitedUserProfile({ ...dataResponse.data }));
  }

  const statusResponse = await profileAPI.getStatus(id);
  if (statusResponse.status === 200) {
    dispatch(setUserStatus(statusResponse.data));
  }

  dispatch(changeProfileFetchingStatus(false));
};

export const changeProfileStatus = (status: Status) => async (dispatch: any) => {
  const response = await profileAPI.changeStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const changeProfileAvatar = (avatar: File) => async (dispatch: any) => {
  const idResponse = await authAPI.authMe();

  if (idResponse.data.resultCode === 0) {
    const response = await profileAPI.changeAvatar(avatar);
    if (response.data.resultCode === 0) {
      dispatch(changeVisitedProfile(idResponse.data.data.id));
    }
  }
};

export const changeProfileInfo = (info: ProfileInfoPayload) => async (dispatch: any) => {
  const idResponse = await authAPI.authMe();

  if (idResponse.data.resultCode === 0) {
    const response = await profileAPI.changeInfo(info);
    if (response.data.resultCode === 0) {
      dispatch(changeVisitedProfile(idResponse.data.data.id));
    }
  }
};

type Post = {
  id: number;
  likes: number;
  text: string;
};

type ProfileState = {
  posts: Array<Post>;
  visitedProfile: any;
  isFetching: boolean;
};

const initialState: ProfileState = {
  posts: [
    {
      id: 0,
      likes: Math.ceil(Math.random() * 100),
      text: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл',
    },
    {
      id: 1,
      likes: Math.ceil(Math.random() * 100),
      text: 'Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн',
    },
    {
      id: 2,
      likes: Math.ceil(Math.random() * 100),
      text: 'Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский',
    },
    {
      id: 3,
      likes: Math.ceil(Math.random() * 100),
      text: 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан',
    },
  ],
  visitedProfile: {},
  isFetching: true,
};

export const getVisitedProfile = (state: any) => state.profile.visitedProfile;
export const getProfileIsFetching = (state: any) => state.profile.isFetching;
export const getPosts = (state: any) => state.profile.posts;

export const profileReducer = (state: ProfileState = initialState, action: AnyAction): ProfileState => {
  switch (action.type) {
    case CHANGE_PROFILE_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: state.posts.length, likes: Math.ceil(Math.random() * 100), text: action.text }],
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
        },
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
};
