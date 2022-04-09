import { Dispatch, SetStateAction } from 'react';
import s from './checkbox.module.scss';

interface ICheckbox {
  id: string;
  checked?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>>;
  label?: string;
  disabled?: boolean;
}

export default function Checkbox({
  id,
  label,
  disabled = false,
  checked = false,
  onChange,
}: ICheckbox) {
  return (
    <label className={s.check} htmlFor={id}>
      <input
        id={id}
        type='checkbox'
        className={s.check__input}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange && onChange((prev) => !prev)}
      />
      <span className={s.check__box} />
      {label}
    </label>
  );
}
