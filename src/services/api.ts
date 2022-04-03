import axios from 'axios';
import { BASE_URL } from '../constants';
import {
  Avatar, LoginMePayload, ProfileInfoPayload, Status, UserId,
} from '../types/Api';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': '518537c7-d32a-4180-9c33-1ea620d636fd',
  },
});

export const authAPI = {
  authMe: () => instance.get('auth/me'),
  authLogIn: (data: LoginMePayload) => instance.post('/auth/login', data),
  authLogOut: () => instance.delete('/auth/login'),
};

export const profileAPI = {
  getUserData: (id: UserId) => instance.get(`profile/${id}`),
  getStatus: (id: UserId) => instance.get(`profile/status/${id}`),
  changeStatus: (status: Status) => instance.put('profile/status', { status }),
  changeAvatar: (avatar: Avatar) => {
    const formData = new FormData();

    formData.append('image', avatar);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  changeInfo: (info: ProfileInfoPayload) => instance.put('profile', info),
};

export const usersAPI = {
  getCurrentPageData: (page: number, count: number) => instance.get(`users?page=${page}&count=${count}`),
  follow: (id: UserId) => instance.post(`follow/${id}`),
  unfollow: (id: UserId) => instance.delete(`follow/${id}`),
};

export const securityAPI = {
  getCaptcha: () => instance.get('security/get-captcha-url'),
};
