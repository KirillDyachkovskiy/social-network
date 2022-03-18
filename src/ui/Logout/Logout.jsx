import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {ANON_USER_NAME} from '../../constants';
import {authLogOut, getData} from '../../services/redux/reducer/authReducer';
import s from './logout.module.scss';

const mapStateToProps = (state) => ({
  login: getData(state)?.login,
})

const LogoutForm = ({login, authLogOut}) => {
  const {handleSubmit} = useForm({
    mode: 'onBlur',
  });
  const onSubmit = () => {
    login && authLogOut();
  };
  return (
    <div className={s.loginCard}>
      <p>{login || ANON_USER_NAME}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}>
        <button className={s.logOut}>
          <div/>
        </button>
      </form>
    </div>
  )
}

export const Logout = compose(
  connect(mapStateToProps, {authLogOut})
)(LogoutForm)