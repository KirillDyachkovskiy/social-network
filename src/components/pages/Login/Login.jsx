import c from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';

export const Login = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={c.login}>
      <form
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)} >
        <div>
          <p>Login</p>
          <input
            {...register('login', {
              required: 'Поле обязательно!',
              minLength: {
                value: 3,
                message: 'Длина псевдонима должна быть от 3 до 20 символов',
              },
              maxLength: {
                value: 20,
                message: 'Длина псевдонима должна быть от 3 до 20 символов',
              },
              pattern: {
                value: /^[а-яА-Я\w-]+$/,
                message: 'Допустимые символы: буквы, цифры, подчёркивание, дефис',
              }
            })}
          />
          {errors.login && <span>{errors.login?.message || 'Error!'}</span>}
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
