import { ChangeEvent } from 'react';
import s from './profileCard.module.scss';
import Field from '../../ui/Field';
import Avatar from '../../ui/Avatar';
import Status from '../../ui/Status';
import Info from '../Info';
import { TAvatar, TStatus, TVisitedProfile, UserInfo } from '../../types/Api';
import { ANON_USER_STATUS } from '../../constants';

interface IProfileCard {
  visitedProfile: TVisitedProfile;
  changeProfileStatus: (status: TStatus) => void;
  changeProfileAvatar: (avatar: TAvatar) => void;
  changeProfileInfo: (info: UserInfo) => void;
  isOwner: boolean;
}

export default function ProfileCard({
  visitedProfile,
  changeProfileInfo,
  changeProfileAvatar,
  changeProfileStatus,
  isOwner,
}: IProfileCard) {
  const { status, photos, ...userInfo } = visitedProfile;

  const onAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      changeProfileAvatar(e.target.files[0]);
    }
  };

  return (
    <Field>
      <div className={s.card}>
        <div className={s.card__avatar}>
          <Avatar src={photos?.large} size='large' />
          {isOwner && (
            <label className={s.card__label} htmlFor='profileCard'>
              <input
                id='profileCard'
                type='file'
                onChange={onAvatarChange}
                className={s.card__file}
              />
              <span>Изменить аватар</span>
            </label>
          )}
        </div>
        <div>
          <h1>{visitedProfile.fullName}</h1>
          <Status
            status={status || ANON_USER_STATUS}
            changeProfileStatus={isOwner ? changeProfileStatus : undefined}
          />
          <Info
            userInfo={userInfo}
            isOwner={isOwner}
            changeProfileInfo={changeProfileInfo}
          />
        </div>
      </div>
    </Field>
  );
}
