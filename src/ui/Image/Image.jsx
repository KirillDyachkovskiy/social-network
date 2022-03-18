import s from './image.module.scss';

export const Image = ({src, alt, style}) => {
  return (
    <div className={s.image} style={style}>
      <img src={src} alt={alt} />
    </div>
  )
}
