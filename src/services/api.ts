import axios from 'axios';
import { BASE_URL } from '../constants';
import {
  AuthMeResponse,
  CaptchaResponse,
  LoginMePayload,
  LoginMeResponse,
  LogoutMeResponse,
  ProfileInfoPayload,
  ProfileInfoResponse,
  ProfilePhotoPayload,
  ProfilePhotoResponse,
  ProfileStatusPayload,
  ProfileStatusResponse,
  UserFollowPayload,
  UserFollowResponse,
  UserInfoPayload,
  UserInfoResponse,
  UsersResponse,
  UserStatusPayload,
  UserStatusResponse,
  UserUnFollowPayload,
  UserUnfollowResponse,
} from '../types/Api';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': '518537c7-d32a-4180-9c33-1ea620d636fd',
  },
});

export const authAPI = {
  authMe: () => instance.get<AuthMeResponse>('auth/me'),
  authLogIn: (data: LoginMePayload) =>
    instance.post<LoginMeResponse>('/auth/login', data),
  authLogOut: () => instance.delete<LogoutMeResponse>('/auth/login'),
};

export const profileAPI = {
  getUserData: (id: UserInfoPayload) =>
    instance.get<UserInfoResponse>(`profile/${id}`),
  getStatus: (id: UserStatusPayload) =>
    instance.get<UserStatusResponse>(`profile/status/${id}`),
  changeStatus: (status: ProfileStatusPayload) =>
    instance.put<ProfileStatusResponse>('profile/status', { status }),
  changeAvatar: (avatar: ProfilePhotoPayload) => {
    const formData = new FormData();

    formData.append('image', avatar);

    return instance.put<ProfilePhotoResponse>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  changeInfo: (info: ProfileInfoPayload) =>
    instance.put<ProfileInfoResponse>('profile', info),
};

export const usersAPI = {
  getCurrentPageData: (page: number, count: number) =>
    instance.get<UsersResponse>(`users?page=${page}&count=${count}`),
  follow: (id: UserFollowPayload) =>
    instance.post<UserFollowResponse>(`follow/${id}`),
  unfollow: (id: UserUnFollowPayload) =>
    instance.delete<UserUnfollowResponse>(`follow/${id}`),
};

export const securityAPI = {
  getCaptcha: () => instance.get<CaptchaResponse>('security/get-captcha-url'),
};
