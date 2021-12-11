import React from "react";
import c from "./SubmitMessage.module.scss"

const SubmitMessage = () => {
    const inputRef = React.createRef();

    const addPost = () => alert(inputRef.current.value);
    return (
        <div className={c.new}>
            <input type="text" ref={inputRef} className={c.input} placeholder="Write a message" />
            <button type="button" className={c.button} onClick={addPost} >Send</button>
        </div>
    )
}

export { SubmitMessage };