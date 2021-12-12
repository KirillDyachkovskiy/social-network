import React from "react";
import c from "./SubmitPost.module.scss"

const SubmitPost = (props) => {
    let { profile } = props;

    const inputRef = React.createRef();
    const onInputChange = () => {
        profile.editNewPostText(inputRef.current.value);
    }

    const onButtonClick = () => {
        profile.addNewPost();
    }
    return (
        <div className={c.new}>
            <input type="text" ref={inputRef} className={c.input} placeholder="What's new?" value={profile.newPostText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Post</button>
        </div>
    )
}

export { SubmitPost };