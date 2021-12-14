import c from "./Header.module.scss";

const Header = () => (
    <div className={c.header}>
        <div className={c.avatar}>
            <img src="img/avatar_01.jpg" alt="аватарка пользователя в посте" />
        </div>
        <h1 className={c.name}>Кирилл Мохначевский</h1>
        <div className={c.time}>
            вчера в 10:21
        </div>
    </div>
);

export { Header };