import React from "react";
import { sendMessage, updateNewMessage } from "../../../../../redux/state";
import c from "./SubmitMessage.module.scss"

const SubmitMessage = (props) => {
    const { messenger, dispatch } = props;

    const onInputChange = (event) => dispatch(updateNewMessage(event.target.value));
    const onButtonClick = () => dispatch(sendMessage());
    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="Write a message" value={messenger.newMessageText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Send</button>
        </div>
    )
}

export { SubmitMessage };