import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="profile__card card">
                <div className="card__avatar">
                    <img src="./img/avatar_01.jpg" alt="" />
                </div>
                <h1 className="card__name">Кирилл Мохначевский</h1>
                <div className="card__info">
                    <div className="card__row">
                        <div className="card__label">Birthday:</div>
                        <div className="card__labeled">July 9, 2001</div>
                    </div>
                    <div className="card__row">
                        <div className="card__label">Current city:</div>
                        <div className="card__labeled">Moscow</div>
                    </div>
                    <div className="card__row">
                        <div className="card__label">Education:</div>
                        <div className="card__labeled">РЭУ им. Г.В. Плеханова '23</div>
                    </div>
                    <div className="card__row">
                        <div className="card__label">Wed-site:</div>
                        <div className="card__labeled">https://github.com/KirillDyachkovskiy</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;