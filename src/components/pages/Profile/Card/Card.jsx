import c from './Card.module.scss';
import {Info} from './Info';
import {ANON_USER_AVATAR, ANON_USER_STATUS} from '../../../../constants';
import {Status} from '../../../../ui/Status';
import {Field} from "../../../../ui/Field";
import {Cover} from "../../../../ui/Cover";
import {Avatar} from "../../../../ui/Avatar";

export const Card = ({visitedProfile, authedUserId, changeAuthedUserAvatar, changeAuthedUserInfo}) => {
  const {status, photos, userId, ...userInfo} = visitedProfile;
  const isOwner = authedUserId === userId;
  const setUserPhoto = (e) => {
    if (e.target.files.length) {
      changeAuthedUserAvatar(authedUserId, e.target.files[0])
    }
  }
  return (
    <section className={c.card}>
      <Cover />
      <Field>
        <div className={c.box}>
          <div className={c.avatarBox}>
            <div style={{gridArea: 'avatar'}}>
              <Avatar src={photos?.large || ANON_USER_AVATAR} size='large'/>
            </div>
            {isOwner ?
              <label><input type='file' onChange={(e) => setUserPhoto(e)}/><p>Изменить аватар</p></label> : null}
          </div>
          <h1 className={c.name}>{visitedProfile.fullName}</h1>
          {isOwner ? <Status status={status}/> : <p>{status || ANON_USER_STATUS}</p>}
          <Info userInfo={userInfo} isOwner={isOwner} id={authedUserId} changeAuthedUserInfo={changeAuthedUserInfo}/>
        </div>
      </Field>
    </section>
  );
}
