import s from './input.module.scss';

export function Input({
  value,
  setValue,
  isBorderless = false,
  placeholder,
  type = 'text',
  errorMessage,
}) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  const styledBorder = isBorderless
    ? `${s.field} ${s['field__border-disable']}`
    : s.field;

  return (
    <div>
      <div className={s.field__input}>
        <input
          className={errorMessage ? `${s.field} ${s.field__error}` : styledBorder}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
      {errorMessage && <div className={s.field__error_caption}>{errorMessage}</div>}
    </div>
  );
}
