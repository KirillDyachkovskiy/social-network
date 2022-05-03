import { ChangeEvent, FormEvent, useState } from 'react';
import s from './submit.module.scss';
import Button from '../Button';
import Field from '../Field';

interface ISubmit {
  placeholder: string;
  children: string;
  onSubmit: (text: string) => void;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  reset?: boolean;
}

export default function Submit({
  placeholder,
  children,
  onSubmit,
  defaultValue = '',
  required = false,
  disabled = false,
  reset = false,
}: ISubmit) {
  const [value, setValue] = useState<string>(defaultValue);

  const onClick = () => {
    onSubmit(value);
    if (reset) {
      setValue('');
    }
  };

  return (
    <Field color='grey'>
      <form
        className={s.submit}
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          autoComplete='off'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          placeholder={placeholder}
          className={s.submit__input}
        />
        <div className={s.submit__button}>
          <Button
            type='submit'
            onClick={onClick}
            disabled={disabled || (required && !value)}
          >
            {children}
          </Button>
        </div>
      </form>
    </Field>
  );
}
