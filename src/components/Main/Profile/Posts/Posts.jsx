import classNames from "./Posts.module.scss"

const Posts = () => {
    return (
        <section>
            <h2>My posts</h2>
            <div className={classNames.new}>
            </div>
            <div className={classNames.list}>
                <div className={classNames.list}>Пост 1</div>
                <div className={classNames.list}>Пост 2</div>
                <div className={classNames.list}>Пост 3</div>
            </div>
        </section>
    );
}


export { Posts };