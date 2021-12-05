import classNames from "./Title.module.scss"

const Title = () => {
    return (
        <div className={classNames.title}>
            <p>My posts</p>
        </div>
    );
}


export { Title };