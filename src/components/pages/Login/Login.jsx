import c from './Login.module.scss';
import {useForm} from 'react-hook-form';
import {Button} from '../../ui/Button';
import {authLogIn} from '../../../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getData} from "../../../services/selectors";
import {HOC} from "../../hoc";

const mapStateToProps = (state) => ({
  email: getData(state)?.email,
})

const LoginForm = ({authLogIn, email}) => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    if (email !== data.email) {
      authLogIn(data);
    }
  };
  return (
    <div className={c.login}>
      <form
        onSubmit={handleSubmit(onSubmit)}>
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
        <Button disabled={!isValid} onClick={() => {
        }}>Log In</Button>
      </form>
    </div>
  )
};

export const Login = compose(
  connect(mapStateToProps, {authLogIn}),
  HOC.withRedirect('/'),
)(LoginForm);
