import classNames from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={classNames.footer}>
            <div className={classNames.container}>
                <p>Все права пока не защищены</p>
                <p>Saloon - российская социальная сеть со штаб-квартирой в Москве.Сайт доступен на 1 языке;
                    особенно популярен среди русскоязычных пользователей.«Saloon» позволяет пользователям
                    отправлять друг другу сообщения, создавать собственные страницы, обмениваться изображениями
                    и аудиозаписями.</p>
            </div>
        </footer>
    );
};


export { Footer };