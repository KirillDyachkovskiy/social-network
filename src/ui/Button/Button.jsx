import s from './button.module.scss';

export const Button = ({children, disabled, onClick}) => {
  return (
    <button
      className={s.button}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}
