import c from './Header.module.scss';

const Header = () => (
    <div className={c.header}>
        <div className={c.avatar}>
            <img src='https://avatars.githubusercontent.com/u/81510334?s=400&u=458606c3cfc79e4c291c5025ea2655c90adc6163&v=4' alt='аватарка пользователя в посте' />
        </div>
        <h1 className={c.name}>Кирилл Мохначевский</h1>
        <div className={c.time}>
            вчера в 10:21
        </div>
    </div>
);

export { Header };