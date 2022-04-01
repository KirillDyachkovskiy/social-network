import {useForm} from 'react-hook-form';
import {ANON_USER_NAME} from '../../constants';
import s from './loginCard.module.scss';

export const LoginCard = ({login = ANON_USER_NAME, authLogOut}) => {
  const {handleSubmit} = useForm({
    mode: 'onBlur',
  });

  function onSubmit() {
    if (login) {
      authLogOut();
    }
  }

  return (
    <div className={s.loginCard}>
      <p className={s.loginCard__nickname}>{login}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}>
        <button className={s.loginCard__logout}>
          <div className={s.loginCard__icon} />
        </button>
      </form>
    </div>
  )
}
