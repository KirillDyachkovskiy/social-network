import c from './profileCard.module.scss';
import {Field} from "../../ui/Field";
import {Avatar} from "../../ui/Avatar";
import {Status} from "../../ui/Status";
import {Info} from "../Info";

export const ProfileCard = ({visitedProfile, authedUserId, changeUserInfo, changeUserAvatar}) => {
  const {status, fullName, photos, userId, ...userInfo} = visitedProfile;
  const isOwner = authedUserId === userId;

  function handleChange(e) {
    if (e.target.files.length) {
      changeUserAvatar(userId, e.target.files[0])
    }
  }

  return (
    <Field>
      <div className={c.card}>
        <div className={c.card__avatar}>
          <Avatar src={photos?.large} size='large' isOwner={isOwner}/>
          {isOwner &&
            <label  className={c.card__label}><input type='file' onChange={handleChange} className={c.card__file} />Изменить аватар</label>}
        </div>
        <div style={{ width: '600px'}}>
          <h1>{fullName}</h1>
          <Status status={status} isOwner={isOwner}/>
          <Info userInfo={userInfo} isOwner={isOwner} id={authedUserId} changeUserInfo={changeUserInfo}/>
        </div>
      </div>
    </Field>
  );
}
