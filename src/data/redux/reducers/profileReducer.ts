import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { profileService } from '../../api/Api';
import { RootState } from '../store';
import { getUserData } from './authReducer';
import {
  ResultCode,
  TStatus,
  TVisitedProfile,
  UserId,
  UserInfo,
} from '../../types/Api';

export const addPost = (text: string) => ({ type: 'profile/addPost', text });
export const deletePost = (id: number) => ({
  type: 'profile/deletePost',
  id,
});
export const setVisitedUserProfile = (data: UserInfo) => ({
  type: 'profile/setVisitedUserProfile',
  data,
});
export const setUserStatus = (status: TStatus) => ({
  type: 'profile/setUserStatus',
  status,
});

export const changeVisitedProfile =
  (id: UserId): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const dataRes = await profileService.getData(id);

    if (dataRes.status === 200) {
      dispatch(setVisitedUserProfile({ ...dataRes.data }));
    }

    const statusRes = await profileService.getStatus(id);

    if (statusRes.status === 200) {
      dispatch(setUserStatus(statusRes.data));
    }
  };

export const changeProfileStatus =
  (
    status: TStatus
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const Res = await profileService.updateStatus(status);

    if (Res.data.resultCode === ResultCode.Success) {
      dispatch(setUserStatus(status));
    }
  };

export const changeProfileAvatar =
  (avatar: File): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
    getState
  ) => {
    const Res = await profileService.updateAvatar(avatar);
    const { id } = getUserData(getState());

    if (Res.data.resultCode === ResultCode.Success && id) {
      await dispatch(changeVisitedProfile(id));
    }
  };

export const changeProfileInfo =
  (
    info: UserInfo
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
    getState
  ) => {
    const Res = await profileService.changeInfo(info);
    const { id } = getUserData(getState());

    if (Res.data.resultCode === ResultCode.Success && id) {
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
    aboutMe: null,
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
    case 'profile/addPost':
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

    case 'profile/deletePost':
      return {
        ...state,
        posts: state.posts.filter((item, id) => id !== action.id),
      };

    case 'profile/setVisitedUserProfile':
      return {
        ...state,
        visitedProfile: {
          ...action.data,
          status: state.visitedProfile.status,
        },
      };

    case 'profile/setUserStatus':
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
