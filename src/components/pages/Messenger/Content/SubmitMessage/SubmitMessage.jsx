import React from "react";
import c from "./SubmitMessage.module.scss"

const SubmitMessage = (props) => {
    let { messenger } = props;

    const onInputChange = (event) => {
        messenger.newMessageText = event.target.value;
    }

    const onButtonClick = () => {
        messenger.sendMessage();
    }
    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="Write a message" value={messenger.newMessageText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Send</button>
        </div>
    )
}

export { SubmitMessage };