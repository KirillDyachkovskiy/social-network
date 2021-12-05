import classNames from "./Avatar.module.scss"

import avatar from "../../../../../img/avatar_01.jpg";

const Avatar = () => {
    return (
        <div className={classNames.avatar}>
            <img src={avatar} alt="" />
        </div>
    );
};

export { Avatar };