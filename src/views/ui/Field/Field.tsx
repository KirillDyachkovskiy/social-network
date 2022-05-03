import { ReactNode } from 'react';
import s from './field.module.scss';

interface IField {
  children: ReactNode;
  color?: 'white' | 'grey' | 'blue';
}

export default function Field({ children, color = 'white' }: IField) {
  return (
    <div className={`${s.field} ${s[`field_color_${color}`]}`}>{children}</div>
  );
}
