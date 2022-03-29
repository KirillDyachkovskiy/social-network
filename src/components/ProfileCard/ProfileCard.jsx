import c from './profileCard.module.scss';
import {Field} from "../../ui/Field";
import {Avatar} from "../../ui/Avatar";
import {Status} from "../../ui/Status";
import {Info} from "../Info";

export const ProfileCard = ({visitedProfile, authedUserId, changeUserInfo}) => {
  const {status, fullName, photos, userId, ...userInfo} = visitedProfile;
  const isOwner = authedUserId === userId;

  return (
    <Field>
      <div className={c.card}>
        <div className={c.card__avatarBox}>
          <Avatar src={photos?.large} size='large' isOwner={isOwner} />
        </div>
        <div className={c.card__data}>
          <h1>{fullName}</h1>
          <Status status={status} isOwner={isOwner} />
          <Info userInfo={userInfo} isOwner={isOwner} id={authedUserId} changeUserInfo={changeUserInfo}/>
        </div>
      </div>
    </Field>
  );
}
