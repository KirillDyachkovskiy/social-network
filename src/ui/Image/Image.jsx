import s from './image.module.scss';

export const Image = ({ src, alt }) => {
  return (
    <div className={s.image}>
      <img className={s.image__img} src={src} alt={alt ?? 'изображение'} />
    </div>
  )
}
