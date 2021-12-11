import React from "react";
import c from "./SubmitPost.module.scss"

const SubmitPost = (props) => {
    const inputRef = React.createRef();

    const addPost = () => {
        props.addPost(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <div className={c.new}>
            <input type="text" ref={inputRef} className={c.input} placeholder="What's new?" />
            <button type="button" className={c.button} onClick={addPost} >Post</button>
        </div>
    )
}

export { SubmitPost };