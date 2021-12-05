import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container _container">
                    <div className="footer__copy">
                        <span>Все права пока не защищены</span>
                    </div>
                    <div className="footer__text">
                        <span>Saloon - российская социальная сеть со штаб-квартирой в Москве. Сайт доступен на 1 языке;
                            особенно популярен среди русскоязычных пользователей. «Saloon» позволяет пользователям
                            отправлять друг другу сообщения, создавать собственные страницы, обмениваться изображениями
                            и
                            аудиозаписями.</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;