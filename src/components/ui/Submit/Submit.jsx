import c from './Submit.module.scss'
import {useForm} from 'react-hook-form';
import {Button} from '../Button';
import {Field} from "../Field";

export const Submit = ({placeholder, children, onSubmit}) => {
  const {register, handleSubmit, reset, formState: {isValid}} = useForm({
    mode: 'onChange',
  });

  return (
    <Field style={{backgroundColor: '#f1f1f1'}}>
      <form
        className={c.form}
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
