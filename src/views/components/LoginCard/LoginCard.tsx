import s from './loginCard.module.scss';

interface ILoginCard {
  name: string | null;
  logout: () => void;
}

function LoginCard({ name, logout }: ILoginCard) {
  return (
    <div className={s.loginCard}>
      <p className={s.loginCard__nickname}>{name}</p>
      {name && (
        <button type='button' className={s.loginCard__logout} onClick={logout}>
          <p className={s.loginCard__icon} />
        </button>
      )}
    </div>
  );
}

export default LoginCard;
