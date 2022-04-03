import { Field } from '../Field';
import s from './message.module.scss';

interface IMessage {
  type?: 'to' | 'from';
  children: string;
}

export default function Message({ type = 'to', children } : IMessage) {
  return (
    <div className={`${s.message} ${s[`message__${type}`]}`}>
      <Field color={type === 'to' ? 'grey' : 'blue'}>{children}</Field>
    </div>
  );
}
