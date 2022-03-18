import s from './preloader.module.scss';

export default function Preloader({color = 'blue'}) {
  return (
    <div className={`${s.preloader} ${s[color]}`}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
};
