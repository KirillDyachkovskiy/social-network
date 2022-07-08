import axios from 'axios';
import {
  AuthMeRes,
  CaptchaRes,
  LoginMeReq,
  LoginMeRes,
  LogoutMeRes,
  ProfileInfoReq,
  ProfileInfoRes,
  ProfilePhotoReq,
  ProfilePhotoRes,
  ProfileStatusReq,
  ProfileStatusRes,
  UserFollowReq,
  UserFollowRes,
  UserInfoReq,
  UserInfoRes,
  UsersReq,
  UsersRes,
  UserStatusReq,
  UserStatusRes,
  UserUnFollowReq,
  UserUnfollowRes,
} from '../types/Api';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '9137c81a-7d09-4353-9943-cfdf2258f6a5',
  },
});

export const authService = {
  me: () => instance.get<AuthMeRes>('auth/me'),
  login: (data: LoginMeReq) => instance.post<LoginMeRes>('/auth/login', data),
  logout: () => instance.delete<LogoutMeRes>('/auth/login'),
};

export const profileService = {
  async getData(id: UserInfoReq) {
    const { data } = await instance.get<UserInfoRes>(`profile/${id}`);

    return data;
  },
  async getStatus(id: UserStatusReq) {
    const { data } = await instance.get<UserStatusRes>(`profile/status/${id}`);

    return data;
  },
  updateStatus: (status: ProfileStatusReq) =>
    instance.put<ProfileStatusRes>('profile/status', { status }),
  updateAvatar: (avatar: ProfilePhotoReq) => {
    const formData = new FormData();

    formData.append('image', avatar);

    return instance.put<ProfilePhotoRes>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  changeInfo: (info: ProfileInfoReq) =>
    instance.put<ProfileInfoRes>('profile', info),
};

export const usersService = {
  async getByPage({ count, page, term, friend }: UsersReq) {
    const { data } = await instance.get<UsersRes>(`users`, {
      params: {
        page,
        count,
        term,
        friend,
      },
    });

    return data as UsersRes;
  },
  subscribeById: (id: UserFollowReq) =>
    instance.post<UserFollowRes>(`follow/${id}`),
  unsubscribeById: (id: UserUnFollowReq) =>
    instance.delete<UserUnfollowRes>(`follow/${id}`),
};

export const securityService = {
  getCaptcha: () => instance.get<CaptchaRes>('security/get-captcha-url'),
};
