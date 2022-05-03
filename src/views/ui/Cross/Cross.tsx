import { MouseEventHandler } from 'react';
import s from './cross.module.scss';

interface ICross {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Cross({ onClick }: ICross) {
  return (
    <button className={s.deleter} type='button' onClick={onClick}>
      ×
    </button>
  );
}
