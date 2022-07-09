import axios from 'axios';
import {
  AuthMeRes,
  CaptchaRes,
  LoginMeReq,
  LoginMeRes,
  ProfileInfoReq,
  ProfileInfoRes,
  ProfilePhotoReq,
  ProfilePhotoRes,
  ProfileStatusReq,
  ProfileStatusRes,
  TLogoutRes,
  TUserInfoReq,
  TUserInfoRes,
  UserFollowReq,
  UserFollowRes,
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
  async me() {
    const { data } = await instance.get<AuthMeRes>('auth/me');

    return data.data;
  },
  async login(data: LoginMeReq) {
    await instance.post<LoginMeRes>('/auth/login', data);
  },
  async logout() {
    await instance.delete<TLogoutRes>('/auth/login');
  },
};

export const profileService = {
  async getData(id: TUserInfoReq) {
    const { data } = await instance.get<TUserInfoRes>(`profile/${id}`);

    return data;
  },
  async getStatus(id: UserStatusReq) {
    const { data } = await instance.get<UserStatusRes>(`profile/status/${id}`);

    return data;
  },
  async updateStatus(status: ProfileStatusReq) {
    await instance.put<ProfileStatusRes>('profile/status', {
      status,
    });
  },
  async updateAvatar(avatar: ProfilePhotoReq) {
    const formData = new FormData();

    formData.append('image', avatar);

    await instance.put<ProfilePhotoRes>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  async updateInfo(info: ProfileInfoReq) {
    const { data } = await instance.put<ProfileInfoRes>('profile', info);

    return data;
  },
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
