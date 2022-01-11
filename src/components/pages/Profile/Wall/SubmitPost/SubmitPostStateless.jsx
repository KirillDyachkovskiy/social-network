import c from './SubmitPost.module.scss'

const SubmitPostStateless = ({ text, onInputChange, onButtonClick }) => {
    return (
        <div className={c.new}>
            <input type='text' className={c.input} placeholder="What' s new?" value={text} onChange={onInputChange} />
            <button type='button' className={c.button} onClick={onButtonClick} >Post</button>
        </div>
    )
}

export { SubmitPostStateless };