import axios from 'axios';
import {BASE_URL} from '../constants';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': '518537c7-d32a-4180-9c33-1ea620d636fd',
  },
});

export const authAPI = {
  authMe: () => instance.get('auth/me'),
  authLogIn: (data) => instance.post('/auth/login', data),
  authLogOut: () => instance.delete('/auth/login'),
}

export const profileAPI = {
  getUserData: (id) => instance.get(`profile/${id}`),
  getStatus: (id) => instance.get(`profile/status/${id}`),
  changeStatus: (status) => instance.put('profile/status', {status}),
  changeAvatar: (avatar) => {
    const formData = new FormData();
    formData.append('image', avatar);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  },
  changeInfo: (info) => instance.put('profile', info),
}

export const usersAPI = {
  getCurrentPageData: (page, count) => instance.get(`users?page=${page}&count=${count}`),
  // getOnlyFollowingUsers: () => instance.get('users?friend=true'),
  follow: (id) => instance.post(`follow/${id}`),
  unfollow: (id) => instance.delete(`follow/${id}`),
}

export const securityAPI = {
  getCaptcha: () => instance.get('security/get-captcha-url'),
}
