import s from './avatar.module.scss';
import {ANON_USER_AVATAR} from "../../constants";

export const Avatar = ({src, size = 'small'}) => {
  return (
    <div className={`${s.avatar} ${s[`avatar__${size}`]}`}>
      <img className={s.avatar__img} src={src || ANON_USER_AVATAR} alt='Аватар пользователя' />
    </div>
  )
}
