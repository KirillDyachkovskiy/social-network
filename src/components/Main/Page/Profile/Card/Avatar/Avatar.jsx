import classNames from "./Avatar.module.scss";

const Avatar = () => (
    <div className={classNames.avatar}>
        <img src="img/avatar_01.jpg" alt="" />
    </div>
);

export { Avatar };