import {Field} from "../Field";
import s from './message.module.scss';

export const Message = ({type = 'to', children}) => {
  return (
    <div className={`${s.message} ${s[`message__${type}`]}`}>
      <Field color={type === 'to' ? 'grey' : 'blue'}>{children}</Field>
    </div>
  )
}
