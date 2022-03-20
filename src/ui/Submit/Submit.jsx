import s from './submit.module.scss'
import {useForm} from 'react-hook-form';
import {Button} from '../Button';
import {Field} from "../Field";

export const Submit = ({placeholder, children, onSubmit}) => {
  const {register, handleSubmit, reset, formState: {isValid}} = useForm({
    mode: 'onChange',
  });

  return (
    <Field color='grey'>
      <form
        className={s.form}
        autofocus
        autoComplete='off'
        onSubmit={handleSubmit(({value}) => onSubmit(value) && reset())}>
        <input
          placeholder={placeholder}
          {...register('value', {
            required: true,
          })} />
        <Button disabled={!isValid}>{children}</Button>
      </form>
    </Field>
  )
};
