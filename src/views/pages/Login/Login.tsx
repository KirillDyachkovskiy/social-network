// @ts-nocheck
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Field, Image } from '../../ui';
import s from './login.module.scss';
import useAuthLoginMutate from '../../../data/hooks/useAuthLoginMutate';
import { useAuthMeQuery, useCaptchaQuery } from '../../../data/hooks';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      rememberMe: true,
    },
  });

  const navigate = useNavigate();

  const { data: captchaData } = useCaptchaQuery();
  const captcha = captchaData?.data.url;
  const { data } = useAuthMeQuery();
  const authedId = data?.data?.id;

  console.log('render');

  const { mutate: authLogin } = useAuthLoginMutate();

  if (authedId) {
    navigate('/', { replace: true });
  }

  return (
    <Field>
      <form className={s.form} onSubmit={handleSubmit(authLogin)}>
        <div>
          <p>Email</p>
          <input
            className={s.form__input}
            {...register('email', {
              required: 'Поле обязательно!',
              pattern: {
                value:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: 'Введите корректный email',
              },
            })}
          />
          {errors.email && (
            <span className={s.form__error}>
              {errors.email?.message || 'Error!'}
            </span>
          )}
        </div>
        <div>
          <p>Password</p>
          <input
            className={s.form__input}
            type='password'
            {...register('password', {
              required: 'Поле обязательно!',
            })}
          />
          {errors.password && (
            <span>{errors.password?.message || 'Error!'}</span>
          )}
        </div>
        <div>
          <p>Remember Me</p>
          <input
            className={s.form__checkbox}
            type='checkbox'
            {...register('rememberMe')}
          />
        </div>
        {captcha && (
          <div>
            <div className={s.form__captcha}>
              <Image
                src={captcha}
                alt='captcha'
                width='fit-content'
                height='fit-content'
              />
            </div>
            <input
              className={s.form__input}
              type='text'
              {...register('captcha', {
                required: 'Поле обязательно!',
              })}
            />
            {errors.captcha && (
              <span>{errors.captcha?.message || 'Error!'}</span>
            )}
          </div>
        )}
        <div className={s.form__button}>
          <Button type='submit'>Log In</Button>
        </div>
      </form>
    </Field>
  );
}

export default Login;
