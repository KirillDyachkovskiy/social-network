import c from './SubmitMessage.module.scss'

export const SubmitMessageStateless = ({ text, updateNewMessageText, sendMessage }) => {
    return (
        <div className={c.new}>
            <input type='text' className={c.input} placeholder='Write a message' value={text} onChange={(e) => updateNewMessageText(e.target.value)} />
            <button type='button' className={c.button} onClick={sendMessage} >Send</button>
        </div>
    )
}
