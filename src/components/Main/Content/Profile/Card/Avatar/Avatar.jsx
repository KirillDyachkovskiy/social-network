import classNames from "./Avatar.module.scss"

const Avatar = () => {
    return (
        <div className={classNames.avatar}>
            <img src="source/img/avatar_01.jpg" alt="" />
        </div>
    );
};

export { Avatar };