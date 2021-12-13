import React from "react";
import c from "./SubmitPost.module.scss"

import { addPost, updateNewPost } from '../../../../../redux/state'

const SubmitPost = (props) => {
    const { profile, dispatch } = props;

    const onInputChange = (event) => dispatch(updateNewPost(event.target.value));
    const onButtonClick = () => dispatch(addPost());
    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="What's new?" value={profile.newPostText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Post</button>
        </div>
    )
}

export { SubmitPost };