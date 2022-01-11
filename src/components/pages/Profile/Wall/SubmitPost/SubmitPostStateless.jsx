import c from './SubmitPost.module.scss'

const SubmitPostStateless = ({ text, updateNewPostText, addPost }) => {
    return (
        <div className={c.new}>
            <input type='text' className={c.input} placeholder="What' s new?" value={text} onChange={(e) => updateNewPostText(e.target.value)} />
            <button type='button' className={c.button} onClick={addPost} >Post</button>
        </div>
    )
}

export { SubmitPostStateless };