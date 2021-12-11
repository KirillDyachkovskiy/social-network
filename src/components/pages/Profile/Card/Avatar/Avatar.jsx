import c from "./Avatar.module.scss";

const Avatar = () => (
    <div className={c.avatar}>
        <img src="img/avatar_01.jpg" alt="аватарка профиля" />
    </div>
);

export { Avatar };