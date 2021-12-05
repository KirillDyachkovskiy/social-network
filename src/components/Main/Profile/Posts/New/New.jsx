import classNames from "./New.module.scss"

const New = () => {
    return (
        <div className={classNames.new}>
            <input type="text" className={classNames.input} placeholder="What's new?" />
            <button className={classNames.button} >Post</button>
        </div>
    );
}


export { New };