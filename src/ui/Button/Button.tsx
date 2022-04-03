import { MouseEventHandler } from 'react';
import s from './button.module.scss';

interface IButton {
  children: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, disabled = false, onClick } : IButton) {
  return (
    <button
      className={s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
