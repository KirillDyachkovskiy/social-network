import s from './field.module.scss';

export const Field = ({children, color = 'white' }) => {
  return (
    <div className={`${s.field} ${s[`field_color_${color}`]}`}>
      {children}
    </div>
  )
}
