import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { profileAPI } from '../../api';
import {
  ProfileInfoPayload,
  TStatus,
  TVisitedProfile,
  UserId,
  UserInfo,
} from '../../../types/Api';
import { RootState } from '../store';
import { getUserData } from './authReducer';

const ADD_POST = 'profile/addPost';

export const addPost = (text: string) => ({ type: ADD_POST, text });

const DELETE_POST = 'profile/deletePost';

export const deletePost = (id: number) => ({
  type: DELETE_POST,
  id,
});

const SET_VISITED_USER_PROFILE = 'profile/setVisitedUserProfile';

export const setVisitedUserProfile = (data: UserInfo) => ({
  type: SET_VISITED_USER_PROFILE,
  data,
});

const SET_USER_STATUS = 'profile/setUserStatus';

export const setUserStatus = (status: TStatus) => ({
  type: SET_USER_STATUS,
  status,
});

export const changeVisitedProfile =
  (id: UserId): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const dataResponse = await profileAPI.getUserData(id);

    if (dataResponse.status === 200) {
      dispatch(setVisitedUserProfile({ ...dataResponse.data }));
    }

    const statusResponse = await profileAPI.getStatus(id);

    if (statusResponse.status === 200) {
      dispatch(setUserStatus(statusResponse.data));
    }
  };

export const changeProfileStatus =
  (
    status: TStatus
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const response = await profileAPI.changeStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };

export const changeProfileAvatar =
  (avatar: File): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
    getState
  ) => {
    const response = await profileAPI.changeAvatar(avatar);
    const { id } = getUserData(getState());

    if (response.data.resultCode === 0 && id) {
      await dispatch(changeVisitedProfile(id));
    }
  };

export const changeProfileInfo =
  (
    info: ProfileInfoPayload
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
    getState
  ) => {
    const response = await profileAPI.changeInfo(info);
    const { id } = getUserData(getState());

    if (response.data.resultCode === 0 && id) {
      await dispatch(changeVisitedProfile(id));
    }
  };

export type UserPost = {
  id: number;
  likes: number;
  text: string;
};

type ProfileState = {
  posts: Array<UserPost>;
  visitedProfile: TVisitedProfile;
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
      text: 'За свою карьеру я пропустил более 9000 бросков,проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан',
    },
  ],
  visitedProfile: {
    lookingForAJob: null,
    lookingForAJobDescription: null,
    contacts: {
      github: null,
      vk: null,
      facebook: null,
      instagram: null,
      twitter: null,
      website: null,
      youtube: null,
      mainLink: null,
    },
    fullName: null,
    userId: null,
    photos: {
      small: null,
      large: null,
    },
    status: null,
  },
};

export const getVisitedProfile = (state: RootState) =>
  state.profile.visitedProfile;
export const getPosts = (state: RootState) => state.profile.posts;

export const profileReducer = (
  state: ProfileState = initialState,
  action: AnyAction
): ProfileState => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            likes: Math.ceil(Math.random() * 100),
            text: action.text,
          },
        ],
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
