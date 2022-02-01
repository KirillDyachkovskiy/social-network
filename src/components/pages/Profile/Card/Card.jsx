import c from './Card.module.scss';
import {Contacts} from './Contacts';
import {Avatar} from '../../../ui/Avatar';
import {ANON_USER_COVER, ANON_USER_STATUS} from '../../../../constants';
import {Status} from '../../../ui/Status';
import {Field} from "../../../ui/Field";

export const Card = ({photos, fullName, status, aboutMe, contacts, isOwner, changeAuthedUserAvatar}) => {
  const setUserPhoto = (e) => {
    if (e.target.files.length) {
      changeAuthedUserAvatar(e.target.files[0])
    }
  }
  return (
    <section className={c.card}>
      <div className={c.cover}>
        <img src={ANON_USER_COVER} alt='cover'/>
      </div>
      <Field>
        <div className={c.box}>
          <div className={c.avatarBox}>
            <Avatar src={photos?.large} size='large'/>
            {isOwner ?
              <label><input type='file' onChange={(e) => setUserPhoto(e)}/><p>Изменить аватар</p></label> : null}
          </div>
          <h1 className={c.name}>{fullName}</h1>
          {isOwner ? <Status status={status}/> : <p>{status || ANON_USER_STATUS}</p>}
          <p className={c.about}>About me: {aboutMe}</p>
          <Contacts contacts={contacts}/>
        </div>
      </Field>
    </section>
  );
}
