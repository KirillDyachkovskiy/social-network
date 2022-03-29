import s from './submit.module.scss'
import {useForm} from 'react-hook-form';
import {Button} from '../Button';
import {Field} from "../Field";

export const Submit = ({placeholder, children, onSubmit}) => {
  const {register, handleSubmit, reset} = useForm({
    mode: 'onChange',
  });

  function handleAction(value) {
    onSubmit(value);
    reset();
  }

  return (
    <Field>
      <Field color='grey'>
        <form
          className={s.form}
          autoFocus
          autoComplete='off'
          onSubmit={handleSubmit(handleAction)}>
          <input
            placeholder={placeholder}
            {...register('value', {
              required: true,
            })} />
          <Button>{children}</Button>
        </form>
      </Field>
    </Field>
  )
};
