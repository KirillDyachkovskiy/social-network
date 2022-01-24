import c from './Card.module.scss';
import {Contacts} from './Contacts';
import {Avatar} from '../../../ui/Avatar';
import {ANON_USER_COVER} from '../../../../constants';
import {Status} from '../../../ui/Status';

export const Card = (props) => {
  return (
    <section className={c.card}>
      <div className={c.cover}>
        <img src={ANON_USER_COVER} alt='cover'/>
      </div>
      <div className={c.box}>
        <Avatar src={props.photos?.large} size='large'/>
        <h1 className={c.name}>{props.fullName}</h1>
        <Status status={props.status}/>
        <p className={c.about}>{`About me: ${props.aboutMe}`}</p>
        <Contacts contacts={props.contacts}/>
      </div>
    </section>
  );
}
