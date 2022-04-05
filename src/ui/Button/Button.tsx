import { MouseEventHandler } from 'react';
import s from './button.module.scss';

interface IButton {
  children: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  type = 'button',
  disabled = false,
  onClick,
}: IButton) {
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
