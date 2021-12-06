import classNames from "./Cover.module.scss";

const Cover = () => {
    return (
        <div className={classNames.cover}>
            <img src="img/cover_01.jpg" alt="" />
        </div>
    );
};

export { Cover };