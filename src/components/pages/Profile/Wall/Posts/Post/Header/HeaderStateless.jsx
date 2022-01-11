import c from './Header.module.scss';

export const HeaderStateless = ({ photo, name }) => (
    <div className={c.header}>
        <div className={c.avatar}>
            <img src={photo} alt='profile' />
        </div>
        <h1 className={c.name}>{name}</h1>
        <div className={c.time}>
            вчера в 10:21
        </div>
    </div>
);
