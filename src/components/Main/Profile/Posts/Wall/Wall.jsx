import classNames from "./Wall.module.scss"

const Wall = () => {
    return (
        <div className={classNames.wall}>
            <div className={classNames.item}>Пост 1</div>
            <div className={classNames.item}>Пост 2</div>
            <div className={classNames.item}>Пост 3</div>
        </div>
    );
}


export { Wall };