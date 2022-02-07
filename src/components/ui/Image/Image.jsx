import c from './Image.module.scss';

export const Image = ({src, alt, style}) => {
  return (
    <div className={c.image} style={style}>
      <img src={src} alt={alt} />
    </div>
  )
}
