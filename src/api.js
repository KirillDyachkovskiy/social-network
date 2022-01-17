import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    // 'API-KEY': '5cfcc1b0-6a34-4ead-9faa-3fe4ffa94f8f',
    'API-KEY': '5008bf57-62df-4134-b948-641c777e0f16',
  },
});

export const authAPI = {
  authMe: () => instance.get('auth/me'),
  // authLogin = () => instance.get('/auth/login') 
}

export const profileAPI = {
  getData: (id) => instance.get(`profile/${id}`),
  getStatus: (id) => instance.get(`profile/status/${id}`),
  changeStatus: (status) => instance.put('profile/status', { status }),
}

export const usersAPI = {
  getCurrentPageData: (page, count) => instance.get(`users?page=${page}&count=${count}`),
  hasFollow: (id) => instance.get(`follow/${id}`),
  follow: (id) => instance.post(`follow/${id}`),
  unfollow: (id) => instance.delete(`follow/${id}`),
}