import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import s from './profileCard.module.scss';
import Field from '../../ui/Field';
import Avatar from '../../ui/Avatar';
import Status from '../../ui/Status';
import Info from '../Info';
import { TStatus, TVisitedProfile, UserInfo } from '../../types/Api';
import { ANON_USER_STATUS } from '../../constants';
import {
  changeProfileAvatar,
  changeProfileInfo,
  changeProfileStatus,
} from '../../services/redux/reducer/profileReducer';

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
            status={status || ANON_USER_STATUS}
            changeStatus={isOwner ? changeStatus : undefined}
          />
          <Info userInfo={userInfo} isOwner={isOwner} changeInfo={changeInfo} />
        </div>
      </div>
    </Field>
  );
}
