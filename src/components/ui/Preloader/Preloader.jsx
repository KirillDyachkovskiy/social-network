import c from './Preloader.module.scss';

export const Preloader = ({ color }) => {
    return (
        <div className={`${c.preloader} ${c[color]}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};
