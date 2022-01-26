import c from './Card.module.scss';
import {Contacts} from './Contacts';
import {Avatar} from '../../../ui/Avatar';
import {ANON_USER_COVER} from '../../../../constants';
import {Status} from '../../../ui/Status';

export const Card = ({photos, fullName, status, aboutMe, contacts}) => {
  return (
    <section className={c.card}>
      <div className={c.cover}>
        <img src={ANON_USER_COVER} alt='cover'/>
      </div>
      <div className={c.box}>
        <Avatar src={photos?.large} size='large'/>
        <h1 className={c.name}>{fullName}</h1>
        <Status status={status}/>
        <p className={c.about}>{`About me: ${aboutMe}`}</p>
        <Contacts contacts={contacts}/>
      </div>
    </section>
  );
}
