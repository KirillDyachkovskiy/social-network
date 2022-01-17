import c from './Submit.module.scss'
import { useForm } from 'react-hook-form';

export const Submit = ({ placeholder, children, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({
    mode: 'onChange',
  });
  return (
    <form
      className={c.form}
      autoComplete='off'
      onSubmit={handleSubmit(({ value }) => onSubmit(value) && reset())} >
      <input
        placeholder={placeholder}
        {...register('value', {
          required: true,
        })} />
      <button disabled={!isValid}>{children}</button>
    </form>
  )
};
