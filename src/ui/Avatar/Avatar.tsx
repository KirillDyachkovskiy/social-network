import s from './avatar.module.scss';
import { ANON_USER_AVATAR } from '../../constants';

interface IAvatar {
  src?: string | null;
  size?: 'small' | 'medium' | 'large';
}

export default function Avatar({
  src = ANON_USER_AVATAR,
  size = 'small',
}: IAvatar) {
  return (
    <div className={`${s.avatar} ${s[`avatar__${size}`]}`}>
      <img
        className={s.avatar__img}
        src={src || ANON_USER_AVATAR}
        alt='Аватар пользователя'
      />
    </div>
  );
}
