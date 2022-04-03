import { ANON_USER_NAME } from '../../constants';
import s from './loginCard.module.scss';

interface ILoginCard {
  login: string;
  authLogOut: () => void;
}

export default function LoginCard({ login, authLogOut }: ILoginCard) {
  function onClick() {
    if (login) {
      authLogOut();
    }
  }

  return (
    <div className={s.loginCard}>
      <p className={s.loginCard__nickname}>{login || ANON_USER_NAME}</p>
      <button type="button" className={s.loginCard__logout} onClick={onClick}>
        <p className={s.loginCard__icon} />
      </button>
    </div>
  );
}
