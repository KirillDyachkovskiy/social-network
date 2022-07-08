export enum ResultCode {
  Success = 0,
  Error = 1,
  CaptchaRequired = 10,
}

type Photos = {
  small: null | string;
  large: null | string;
};
export type UserId = number;
export type User = {
  name: string;
  id: UserId;
  photos: Photos;
  status: null | string;
  followed: boolean;
};
type Res<T = object> = {
  resultCode: ResultCode;
  messages: Array<string>;
  data: T;
};
export type TUserInfo = {
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
export type TVisitedProfile = TUserInfo & {
  userId: UserId | null;
  photos: Photos;
  status?: TStatus | null;
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

export type CaptchaRes = {
  url: TCaptcha;
};

export type AuthMeRes = Res<AuthData>;

export type LoginMeReq = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};
export type LoginMeRes = Res;

export type LogoutMeRes = Res;

export type UsersReq = {
  count: number;
  page: number;
  term: string;
  friend: boolean | null;
};

export type UsersRes = {
  items: Array<User>;
  totalCount: number;
  error: string | null;
};

export type ProfileInfoReq = TUserInfo;
export type ProfileInfoRes = Res;

export type ProfilePhotoReq = TAvatar;
export type ProfilePhotoRes = Res<Photos>;

export type ProfileStatusReq = TStatus;
export type ProfileStatusRes = Res;

export type TUserInfoReq = UserId;
export type TUserInfoRes = TUserInfo & { photos: Photos };

export type UserStatusReq = UserId;
export type UserStatusRes = TStatus;

export type UserCheckFollowRes = boolean;

export type UserFollowReq = UserId;
export type UserUnFollowReq = UserId;

export type UserFollowRes = Res;
export type UserUnfollowRes = Res;
