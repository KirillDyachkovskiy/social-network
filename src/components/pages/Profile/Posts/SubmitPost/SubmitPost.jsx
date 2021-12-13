import React from "react";
import { addPost, updateNewPostText } from "../../../../../redux/reducer/pages/profile/profile";
import c from "./SubmitPost.module.scss"

const SubmitPost = (props) => {
    const { profile, dispatch } = props;

    const onInputChange = (event) => dispatch(updateNewPostText(event.target.value));
    const onButtonClick = () => dispatch(addPost());
    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="What's new?" value={profile.newPostText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Post</button>
        </div>
    )
}

export { SubmitPost };