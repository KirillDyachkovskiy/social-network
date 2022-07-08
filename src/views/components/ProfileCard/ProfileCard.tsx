import { ChangeEvent } from 'react';
import ProfileInfo from '../ProfileInfo';
import { Avatar, Field, Status } from '../../ui';
import { TVisitedProfile } from '../../../data/types/Api';
import {
  useUserAvatarMutate,
  useUserInfoMutate,
  useUserStatusMutate,
} from '../../../data/hooks';
import s from './profileCard.module.scss';

interface IProfileCard {
  visitedProfile: TVisitedProfile;
  isOwner: boolean;
}

function ProfileCard({ visitedProfile, isOwner }: IProfileCard) {
  const { status = '', photos, ...userInfo } = visitedProfile;

  const { mutate: updateStatus } = useUserStatusMutate();
  const { mutate: updateInfo } = useUserInfoMutate();
  const { mutate: updateAvatar } = useUserAvatarMutate();

  const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      updateAvatar(e.target.files[0]);
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
                onChange={changeAvatar}
                className={s.card__file}
              />
              <span>Изменить аватар</span>
            </label>
          )}
        </div>
        <div>
          <h1>{visitedProfile.fullName}</h1>
          <Status
            status={status || 'lol'}
            changeStatus={isOwner ? updateStatus : undefined}
          />
          <ProfileInfo
            userInfo={userInfo}
            isOwner={isOwner}
            changeInfo={updateInfo}
          />
        </div>
      </div>
    </Field>
  );
}

export default ProfileCard;
