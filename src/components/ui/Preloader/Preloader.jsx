import c from './Preloader.module.scss';

export default function Preloader({ color }) {
    return (
        <div className={`${c.preloader} ${c[color]}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};
