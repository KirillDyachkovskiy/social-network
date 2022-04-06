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
  fullName: string | null;
  userId: UserId | null;
  photos: Photos;
  status: TStatus | null;
};
export type TStatus = string;
export type TAvatar = File;
export type SidebarItem = { id: number; to: string; text: string };

export type Captcha = {
  url: string;
};

export type AuthData = {
  id: number | null;
  email: string | null;
  login: string | null;
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
  count?: number;
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
  status: TStatus;
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
