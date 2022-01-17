import c from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { authLogIn } from '../../../redux/reducer/authReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';

export const LoginForm = ({ authLogIn }) => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    authLogIn(data);
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
  connect(null, { authLogIn })
)(LoginForm);
