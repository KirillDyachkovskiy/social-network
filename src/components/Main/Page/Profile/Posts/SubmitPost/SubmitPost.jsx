import c from "./SubmitPost.module.scss"

const SubmitPost = () => (
    <div className={c.new}>
        <input type="text" className={c.input} placeholder="What's new?" />
        <button className={c.button} >Post</button>
    </div>
);

export { SubmitPost };