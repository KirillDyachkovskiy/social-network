import s from './profileCard.module.scss';
import {Field} from "../../ui/Field";
import {Avatar} from "../../ui/Avatar";
import {Status} from "../../ui/Status";
import {Info} from "../Info";

export const ProfileCard = ({visitedProfile, changeUserInfo, changeUserAvatar, isOwner}) => {
  const {status, photos, ...userInfo} = visitedProfile;

  function onAvatarChange(e) {
    if (e.target.files.length) {
      changeUserAvatar(e.target.files[0])
    }
  }

  return (
    <Field>
      <div className={s.card}>
        <div className={s.card__avatar}>
          <Avatar src={photos?.large} size='large' isOwner={isOwner}/>
          {isOwner && (
            <label className={s.card__label}>
              <input type='file' onChange={onAvatarChange} className={s.card__file}/>
              <span>Изменить аватар</span>
            </label>
          )}
        </div>
        <div>
          <h1>{visitedProfile.fullName}</h1>
          <Status status={status} isOwner={isOwner}/>
          <Info userInfo={userInfo} isOwner={isOwner} changeUserInfo={changeUserInfo}/>
        </div>
      </div>
    </Field>
  );
}
