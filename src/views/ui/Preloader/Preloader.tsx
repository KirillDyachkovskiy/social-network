import s from './preloader.module.scss';

interface IPreloader {
  color?: 'blue' | 'white';
}

export default function Preloader({ color = 'blue' }: IPreloader) {
  return (
    <div className={`${s.preloader} ${s[`preloader_color_${color}`]}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
