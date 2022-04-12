import axios from 'axios';
import { TMessage } from '../redux/reducers/chatReducer';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
  getCurrentPageData: ({ count, page, term, friend }: UsersPayload) =>
    instance.get<UsersResponse>(
      `users?page=${page}&count=${count}&term=${term}&friend=${friend}`
    ),
  follow: (id: UserFollowPayload) =>
    instance.post<UserFollowResponse>(`follow/${id}`),
  unfollow: (id: UserUnFollowPayload) =>
    instance.delete<UserUnfollowResponse>(`follow/${id}`),
};

export const securityAPI = {
  getCaptcha: () => instance.get<CaptchaResponse>('security/get-captcha-url'),
};

let subscribers: Array<TSubscriber> = [];

let ws: WebSocket | null = null;

function handleClose() {
  setTimeout(createChannel, 3000);
}

function handleMessage(e: MessageEvent) {
  const newMessages = JSON.parse(e.data);

  subscribers.forEach((subscriber: TSubscriber) => subscriber(newMessages));
}

function createChannel() {
  ws?.removeEventListener('close', handleClose);
  ws?.close();

  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  );

  ws.addEventListener('close', handleClose);
  ws.addEventListener('message', handleMessage);
}

export const chatWS = {
  subscribe: (callback: TSubscriber) => {
    subscribers.push(callback);
  },
  unsubscribe: (callback: TSubscriber) => {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  },
  start: () => {
    createChannel();
  },
  stop: () => {
    subscribers = [];
    ws?.removeEventListener('close', handleClose);
    ws?.removeEventListener('message', handleMessage);
    ws?.close();
  },
  send: (message: string) => {
    ws?.send(message);
  },
};

type TSubscriber = (messages: Array<TMessage>) => void;

export enum ResultCode {
  Success = 0,
  Error = 1,
  CaptchaRequired = 10,
}

type Photos = {
  small: null | string;
  large: null | string;
};
export type User = {
  name: string;
  id: UserId;
  photos: Photos;
  status: null | string;
  followed: boolean;
};
export type UserId = number;
type Response<T = Object> = {
  resultCode: ResultCode;
  messages: Array<string>;
  data: T;
};
export type UserInfo = {
  aboutMe: string | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
};
export type TVisitedProfile = UserInfo & {
  userId: UserId | null;
  photos: Photos;
  status: TStatus | null;
};
export type TStatus = string;
export type TAvatar = File;
export type SidebarItem = { id: number; to: string; text: string };

export type TCaptcha = string;

export type AuthData = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export type CaptchaResponse = {
  url: TCaptcha;
};

export type AuthMeResponse = Response<AuthData>;

export type LoginMePayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};
export type LoginMeResponse = Response;

export type LogoutMeResponse = Response;

export type UsersPayload = {
  count: number;
  page: number;
  term: string;
  friend: boolean | null;
};

export type UsersResponse = {
  items: Array<User>;
  totalCount: number;
  error: string | null;
};

export type ProfileInfoPayload = UserInfo;
export type ProfileInfoResponse = Response;

export type ProfilePhotoPayload = TAvatar;
export type ProfilePhotoResponse = Response<Photos>;

export type ProfileStatusPayload = TStatus;
export type ProfileStatusResponse = Response;

export type UserInfoPayload = UserId;
export type UserInfoResponse = UserInfo & Photos;

export type UserStatusPayload = UserId;
export type UserStatusResponse = TStatus;

export type UserCheckFollowResponse = boolean;

export type UserFollowPayload = UserId;
export type UserUnFollowPayload = UserId;

export type UserFollowResponse = Response;
export type UserUnfollowResponse = Response;
