import c from './Login.module.scss';
import {useForm} from 'react-hook-form';
import {Button} from '../../ui/Button';
import {authLogIn, getData} from '../../../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {HOC} from "../../hoc";
import {Field} from "../../ui/Field";

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
    <Field>
      <Field style={{backgroundColor: '#f1f1f1'}}>
        <form className={c.form}
              onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p>Email</p>
            <input
              {...register('email', {
                required: 'Поле обязательно!',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
      </Field>
    </Field>
  )
};

export const Login = compose(
  connect(mapStateToProps, {authLogIn}),
  HOC.withRedirect(-1),
)(LoginForm);
