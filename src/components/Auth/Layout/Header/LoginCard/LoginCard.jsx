import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ANON_USER_NAME } from '../../../../../variables';
import { authLogOut } from '../../../../../redux/reducer/authReducer';
import c from './LoginCard.module.scss';

const mapStateToProps = (state) => ({
  login: state.auth.data.login,
})

const LoginCardForm = ({ login, authLogOut }) => {
  const { handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = () => {
    authLogOut();
  };
  return (
    <div className={c.loginCard}>
      <p>{login || ANON_USER_NAME}</p>
      <form
        onSubmit={handleSubmit(onSubmit)} >
        <button className={c.logOut}>
          <div></div>
        </button>
      </form>
    </div>
  )
}

export const LoginCard = compose(
  connect(mapStateToProps, { authLogOut })
)(LoginCardForm)