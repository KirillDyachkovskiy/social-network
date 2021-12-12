import React from "react";
import c from "./SubmitPost.module.scss"

const SubmitPost = (props) => {
    let { profile } = props;

    const onInputChange = (event) => {
        profile.editNewPostText(event.target.value);
    }

    const onButtonClick = () => {
        profile.addPost();
    }
    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="What's new?" value={profile.newPostText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Post</button>
        </div>
    )
}

export { SubmitPost };