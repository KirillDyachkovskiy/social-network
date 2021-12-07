import classNames from "./Submit.module.scss"

const Submit = () => (
    <div className={classNames.new}>
        <input type="text" className={classNames.input} placeholder="What's new?" />
        <button className={classNames.button} >Post</button>
    </div>
);

export { Submit };