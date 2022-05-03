import s from './loginCard.module.scss';

interface ILoginCard {
  login: string | null;
  authLogOut: () => void;
}

export default function LoginCard({ login, authLogOut }: ILoginCard) {
  return (
    <div className={s.loginCard}>
      <p className={s.loginCard__nickname}>{login || 'Anonymous'}</p>
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
