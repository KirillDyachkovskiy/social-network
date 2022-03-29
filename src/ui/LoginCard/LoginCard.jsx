import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ANON_USER_NAME} from '../../constants';
import {authLogOut, getData} from '../../services/redux/reducer/authReducer';
import s from './loginCard.module.scss';

const mapStateToProps = (state) => ({
  login: getData(state)?.login,
})

const LoginCardForm = ({login = ANON_USER_NAME, authLogOut}) => {
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

export const LoginCard = compose(
  connect(mapStateToProps, {authLogOut})
)(LoginCardForm)
