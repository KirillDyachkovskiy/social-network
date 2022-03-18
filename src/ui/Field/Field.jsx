import s from './field.module.scss';

export const Field = ({children, style}) => {
  return (
    <div className={s.field} style={style}>
      {children}
    </div>
  )
}
