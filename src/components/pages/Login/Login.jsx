import c from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { LENGTH_ERROR } from '../../../variables';

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='login'>Login</label>
                    <input
                        {...register('login', {
                            required: 'Required field',
                            minLength: {
                                value: 3,
                                message: LENGTH_ERROR,
                            },
                            maxLength: {
                                value: 20,
                                message: LENGTH_ERROR,
                            },
                            pattern: {
                                value: /^[а-яА-Я\w-]+$/,
                                message: LENGTH_ERROR,
                            }
                        })}
                    />
                    {errors.login && <span>{errors.login?.message || 'Error!'}</span>}
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                        {...register('password', {
                            required: 'Required field',
                        })}
                    />
                    {errors.password && <span>{errors.password?.message || 'Error!'}</span>}
                </div>
                <div>
                    <input type='submit' value='Log In' disabled={!isValid} />
                </div>
            </form>
        </section>
    )
};
