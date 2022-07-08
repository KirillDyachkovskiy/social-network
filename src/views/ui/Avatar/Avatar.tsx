import avatar from '../../assets/images/default_avatar.jpg';
import s from './avatar.module.scss';

interface IAvatar {
  src?: string | null;
  size?: 'small' | 'medium' | 'large';
}

export default function Avatar({ src, size = 'small' }: IAvatar) {
  return (
    <div className={`${s.avatar} ${s[`avatar__${size}`]}`}>
      <img
        className={s.avatar__img}
        src={src || avatar}
        alt='Аватар пользователя'
      />
    </div>
  );
}
