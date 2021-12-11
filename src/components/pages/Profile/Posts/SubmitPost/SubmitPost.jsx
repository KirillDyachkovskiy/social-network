import React from "react";
import c from "./SubmitPost.module.scss"

const SubmitPost = () => {
    const inputRef = React.createRef();

    const addPost = () => alert(inputRef.current.value);
    return (
        <div className={c.new}>
            <input type="text" ref={inputRef} className={c.input} placeholder="What's new?" />
            <button type="button" className={c.button} onClick={addPost} >Post</button>
        </div>
    )
}

export { SubmitPost };