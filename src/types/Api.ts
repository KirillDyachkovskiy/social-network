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
