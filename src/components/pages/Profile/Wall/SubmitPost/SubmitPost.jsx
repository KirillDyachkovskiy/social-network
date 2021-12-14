import React from "react";
import { addPost, updateNewPostText } from "../../../../../redux/reducer/profileReducer";
import c from "./SubmitPost.module.scss"

const SubmitPost = ({ store }) => {
    const onInputChange = (event) => store.dispatch(updateNewPostText(event.target.value));
    const onButtonClick = () => store.dispatch(addPost());

    return (
        <div className={c.new}>
            <input type="text" className={c.input} placeholder="What's new?" value={store.getState().profile.newPostText} onChange={onInputChange} />
            <button type="button" className={c.button} onClick={onButtonClick} >Post</button>
        </div>
    )
}

export { SubmitPost };