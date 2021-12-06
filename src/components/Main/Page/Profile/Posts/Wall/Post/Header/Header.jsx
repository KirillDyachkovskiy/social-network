import classNames from "./Header.module.scss";

const Header = () => {
    return (
        <div className={classNames.header}>
            <div className={classNames.avatar}>
                <img src="img/avatar_01.jpg" />
            </div>
            <h1 className={classNames.name}>Кирилл Мохначевский</h1>
            <div className={classNames.time}>
                вчера в 10:21
            </div>
        </div>
    );
};

export { Header };