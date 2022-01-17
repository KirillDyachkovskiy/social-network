import c from './Login.module.scss';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className={c.login}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div>
          <label htmlFor='login'>Login</label>
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
          <label htmlFor='password'>Password</label>
          <input type='password'
            {...register('password', {
              required: 'Поле обязательно!',
            })}
          />
          {errors.password && <span>{errors.password?.message || 'Error!'}</span>}
        </div>
        <div>
          <input type='submit'
            disabled={!isValid}
            value='Log In' />
        </div>
      </form>
    </section>
  )
};
