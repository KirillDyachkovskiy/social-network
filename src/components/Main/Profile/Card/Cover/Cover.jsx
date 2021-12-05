import classNames from "./Cover.module.scss"

import cover from "../../../../../img/cover_01.jpg";

const Cover = () => {
    return (
        <div className={classNames.cover}>
            <img src={cover} alt="" />
        </div>
    );
};

export { Cover };