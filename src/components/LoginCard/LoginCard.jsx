import {ANON_USER_NAME} from '../../constants';
import s from './loginCard.module.scss';

export const LoginCard = ({login, authLogOut}) => {
  function onClick() {
    if (login) {
      authLogOut();
    }
  }

  return (
    <div className={s.loginCard}>
      <p className={s.loginCard__nickname}>{login || ANON_USER_NAME}</p>
      <button className={s.loginCard__logout} onClick={onClick}>
        <spanp className={s.loginCard__icon}/>
      </button>
    </div>
  )
}
