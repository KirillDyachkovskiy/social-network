import { ChangeEvent, FormEvent } from 'react';
import s from './submit.module.scss';
import Button from '../../ui/Button';
import Field from '../../ui/Field';

interface ISubmit {
  placeholder: string;
  children: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  disabled?: boolean;
  reset?: boolean;
}

export default function Submit({
  placeholder,
  children,
  value,
  onChange,
  onSubmit,
  disabled = false,
  reset = false,
}: ISubmit) {
  const onClick = () => {
    if (onSubmit) {
      onSubmit();
    }
    if (reset) {
      onChange('');
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
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className={s.submit__input}
        />
        <div className={s.submit__button}>
          <Button type='submit' onClick={onClick} disabled={disabled}>
            {children}
          </Button>
        </div>
      </form>
    </Field>
  );
}
