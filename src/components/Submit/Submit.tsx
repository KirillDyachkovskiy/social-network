import { ChangeEvent, useState } from 'react';
import s from './submit.module.scss';
import Button from '../../ui/Button';
import { Field } from '../../ui/Field';

interface ISubmit {
  placeholder: string;
  children: string;
  onSubmit: (value: string) => void;
}

export default function Submit({ placeholder, children, onSubmit }: ISubmit) {
  const [inputValue, setInputValue] = useState<string>('');

  function onButtonClick() {
    onSubmit(inputValue);
    setInputValue('');
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <Field>
      <Field color="grey">
        <div className={s.submit}>
          <input
            autoComplete="off"
            autoFocus
            value={inputValue}
            onChange={onInputChange}
            placeholder={placeholder}
            className={s.submit__input}
          />
          <div className={s.submit__button}>
            <Button onClick={onButtonClick} disabled={!!inputValue}>{children}</Button>
          </div>
        </div>
      </Field>
    </Field>
  );
}
