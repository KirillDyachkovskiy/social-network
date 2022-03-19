import s from './cover.module.scss';
import {ANON_USER_COVER} from "../../constants";

export const Cover = () => {
  return (
    <div className={s.cover}>
      <img className={s.cover__img} src={ANON_USER_COVER} alt='обложка пользователя' />
    </div>
  )
}
