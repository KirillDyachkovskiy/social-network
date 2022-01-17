import c from './Button.module.scss';

export const Button = ({ children, disabled, onClick, }) => {
  return (
    <button
      className={c.button}
      disabled={disabled}
      onClick={() => onClick()}>
      {children}
    </button>
  )
}
