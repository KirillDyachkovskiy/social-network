import c from './Login.module.scss';
import {useForm} from 'react-hook-form';
import {Button} from '../../ui/Button';
import {authLogIn, getCaptcha} from '../../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {HOC} from "../../hoc";
import {Field} from "../../ui/Field";
import {securityAPI} from "../../services/api";
import {Input} from "../../ui/Input";

const mapStateToProps = (state) => ({
  captcha: getCaptcha(state),
});

const LoginForm = ({authLogIn, captcha}) => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'all',
    defaultValues: {
      rememberMe: true,
    },
  });

  async function onSubmit(data) {
    authLogIn(data);
    await securityAPI.getCaptcha();
    console.log(captcha);
  }

  return (
    <Field>
      <form className={c.form}
            onSubmit={handleSubmit(onSubmit)}>
        <p>Email</p>
        <input
          {...register('email', {
            required: 'Поле обязательно!',
            pattern: {
              value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: 'Введите корректный email',
            }
          })}
        />
        {errors.email && <span>{errors.email?.message || 'Error!'}</span>}
        <p>Password</p>
        <input type='password'
               {...register('password', {
                 required: 'Поле обязательно!',
               })}
        />
        {errors.password && <span>{errors.password?.message || 'Error!'}</span>}
        <p>Remember Me</p>
        <Input type='checkbox' {...register('rememberMe')} />
        <Button>Log In</Button>
      </form>
    </Field>
  )
};

export const Login = compose(
  connect(mapStateToProps, {authLogIn, getCaptcha}),
  HOC.withRedirect(-1),
)(LoginForm);
