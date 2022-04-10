import { ANON_USER_NAME } from '../../constants';
import s from './loginCard.module.scss';

interface ILoginCard {
  login: string | null;
  authLogOut: () => void;
}

export default function LoginCard({ login, authLogOut }: ILoginCard) {
  return (
    <div className={s.loginCard}>
      <p className={s.loginCard__nickname}>{login || ANON_USER_NAME}</p>
      {login && (
        <button
          type='button'
          className={s.loginCard__logout}
          onClick={authLogOut}
        >
          <p className={s.loginCard__icon} />
        </button>
      )}
    </div>
  );
}
