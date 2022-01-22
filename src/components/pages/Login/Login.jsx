import c from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { authLogIn } from '../../../services/redux/reducer/authReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => ({
  email: state.auth.data.email,
})

const LoginForm = ({ authLogIn, email }) => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    email !== data.email && authLogIn(data);
    email && navigate('/', { replace: true });
    reset();
  };
  return (
    <div className={c.login}>
      <form
        onSubmit={handleSubmit(onSubmit)} >
        <div>
          <p>Email</p>
          <input
            {...register('email', {
              required: 'Поле обязательно!',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                message: 'Введите корректный email',
              }
            })}
          />
          {errors.email && <span>{errors.email?.message || 'Error!'}</span>}
        </div>
        <div>
          <p>Password</p>
          <input type='password'
            {...register('password', {
              required: 'Поле обязательно!',
            })}
          />
          {errors.password && <span>{errors.password?.message || 'Error!'}</span>}
        </div>
        <div>
          <p>Remember Me</p>
          <input type='checkbox'
            {...register('rememberMe')}
          />
        </div>
        <Button disabled={!isValid} onClick={() => { }}>Log In</Button>
      </form>
    </div>
  )
};

export const Login = compose(
  connect(mapStateToProps, { authLogIn })
)(LoginForm);
