import c from "./SubmitMessage.module.scss"

const SubmitMessageStateless = ({ text, onInputChange, onButtonClick }) => {
    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="Write a message" value={text} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Send</button>
        </div>
    )
}

export { SubmitMessageStateless };