import s from './image.module.scss';

interface IImage {
  src: string;
  alt?: string;
}

export default function Image({ src, alt }: IImage) {
  return (
    <div className={s.image}>
      <img className={s.image__img} src={src} alt={alt ?? 'изображение'} />
    </div>
  );
}
