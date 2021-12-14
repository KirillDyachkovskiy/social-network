import { addPost, updateNewPostText } from "../../../../../redux/reducer/profileReducer";
import { SubmitPostStateless } from "./SubmitPostStateless";

const SubmitPost = ({ store }) => {
    const onInputChange = (event) => store.dispatch(updateNewPostText(event.target.value));
    const onButtonClick = () => store.dispatch(addPost());

    return <SubmitPostStateless text={store.getState().messenger.newPostText} onInputChange={onInputChange} onButtonClick={onButtonClick} />
}

export { SubmitPost };
