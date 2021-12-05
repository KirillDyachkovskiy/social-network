import React from "react";

import cover from "../../../../img/cover_01.jpg"

class Cover extends React.Component {
    render() {
        return (
            <div className="profile__cover">
                <img src={cover} alt="обложка профиля" />
            </div>
        );
    }
}

export default Cover;