import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeProfileAvatar } from '../../../data/redux/reducers/profileReducer';
import ProfileInfo from '../ProfileInfo';
import { Avatar, Field, Status } from '../../ui';
import { TStatus, TUserInfo, TVisitedProfile } from '../../../data/types/Api';
import { useUserProfileMutate, useUserStatusMutate } from '../../../data/hooks';
import s from './profileCard.module.scss';

interface IProfileCard {
  visitedProfile: TVisitedProfile;
  isOwner: boolean;
}

function ProfileCard({ visitedProfile, isOwner }: IProfileCard) {
  const { status = '', photos, ...userInfo } = visitedProfile;

  const { mutate: updateStatus } = useUserStatusMutate();
  const { mutate: updateProfile } = useUserProfileMutate();

  const dispatch = useDispatch();

  const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(changeProfileAvatar(e.target.files[0]));
    }
  };

  const changeInfo = (userInfo: TUserInfo) => {
    updateProfile(userInfo);
  };

  const changeStatus = (status: TStatus) => {
    updateStatus(status);
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
            changeStatus={isOwner ? changeStatus : undefined}
          />
          <ProfileInfo
            userInfo={userInfo}
            isOwner={isOwner}
            changeInfo={changeInfo}
          />
        </div>
      </div>
    </Field>
  );
}

export default ProfileCard;
