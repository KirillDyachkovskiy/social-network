import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import Field from '../../ui/Field';
import Avatar from '../../ui/Avatar';
import Status from '../../ui/Status';
import ProfileInfo from '../ProfileInfo';
import {
  changeProfileAvatar,
  changeProfileInfo,
  changeProfileStatus,
} from '../../services/redux/reducers/profileReducer';
import { TStatus, TVisitedProfile, UserInfo } from '../../services/api/Api';
import s from './profileCard.module.scss';

interface IProfileCard {
  visitedProfile: TVisitedProfile;
  isOwner: boolean;
}

export default function ProfileCard({ visitedProfile, isOwner }: IProfileCard) {
  const { status, photos, ...userInfo } = visitedProfile;

  const dispatch = useDispatch();

  const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(changeProfileAvatar(e.target.files[0]));
    }
  };

  const changeInfo = (info: UserInfo) => dispatch(changeProfileInfo(info));

  const changeStatus = (status: TStatus) =>
    dispatch(changeProfileStatus(status));

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
            status={status}
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
