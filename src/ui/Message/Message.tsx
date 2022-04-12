import { Link } from 'react-router-dom';
import Field from '../Field';
import Avatar from '../Avatar';
import s from './message.module.scss';

interface IMessage {
  type?: 'from' | 'to';
  photo?: string;
  name?: string;
  children: string;
  sender: number;
}

export default function Message({
  type = 'to',
  photo,
  children,
  name,
  sender,
}: IMessage) {
  if (type === 'to') {
    return (
      <article className={`${s.message} ${s.message_to}`}>
        <Field color='grey'>{children}</Field>
      </article>
    );
  }

  return (
    <article className={s.message_from}>
      <Link to={`/${sender}`}>
        <Avatar src={photo} size='small' />
      </Link>
      <div className={s.message}>
        <Field color='blue'>
          <div>
            <p className={s.message__sender}>{name}</p>
            {children}
          </div>
        </Field>
      </div>
    </article>
  );
}
