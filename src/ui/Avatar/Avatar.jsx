import s from './avatar.module.scss';

export const Avatar = ({src, size = 'small'}) => {
  return (
    <div className={`${s.avatar} ${s[`avatar__${size}`]}`}>
      <img className={s.avatar__img} src={src} alt='Аватар пользователя' />
    </div>
  )
}
