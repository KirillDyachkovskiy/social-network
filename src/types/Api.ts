import { NumberRange } from './Range';

type ResultCode = 0 | 1 | 10;
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
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
};
export type Status = string;
export type UserAvatar = File;
export type SidebarItem = { id: number; to: string, text: string };

export type Captcha = {
  url: string;
};

export type AuthData = {
  id: number;
  email: string;
  login: string;
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
  count?: NumberRange<1, 100>;
  page?: number;
  term?: string;
  friend: boolean;
};
export type UsersResponse = {
  items: Array<User>;
  totalCount: number;
  error: null | string;
};

export type ProfileInfoPayload = UserInfo;
export type ProfileInfoResponse = Response;

export type ProfilePhotoPayload = {
  image: File;
};
export type ProfilePhotoResponse = Response;

export type ProfileStatusPayload = {
  status: Status;
};
export type ProfileStatusResponse = Response;

export type UserInfoPayload = UserId;
export type UserInfoResponse = UserInfo & Photos;

export type UserStatusPayload = UserId;
export type UserStatusResponse = string;

export type UserFollowPayload = UserId;
export type UserCheckFollowResponse = boolean;
export type UserFollowResponse = Response;
export type UserUnfollowResponse = Response;
