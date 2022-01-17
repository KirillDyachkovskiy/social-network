import c from './Button.module.scss';

export const Button = ({ children, disabled, }) => {
  return (
    <button
      className={c.button}
      disabled={disabled}>
      {children}
    </button>
  )
}
