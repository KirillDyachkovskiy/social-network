import c from './Field.module.scss';

export const Field = ({children, style}) => {
  return (
    <div className={c.field} style={style}>
      {children}
    </div>
  )
}
