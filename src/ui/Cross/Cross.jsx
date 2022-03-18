import s from './cross.module.scss';

export const Cross = ({onClick}) => {
  return (
    <button className={s.deleter} onClick={onClick}>×</button>
  )
}
