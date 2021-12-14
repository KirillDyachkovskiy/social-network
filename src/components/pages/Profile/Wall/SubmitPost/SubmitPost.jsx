import { addPost, updateNewPostText } from "../../../../../redux/reducer/profileReducer";
import { StoreContext } from "../../../../../storeContext";
import { SubmitPostStateless } from "./SubmitPostStateless";

const SubmitPost = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const onInputChange = (event) => store.dispatch(updateNewPostText(event.target.value));
                    const onButtonClick = () => store.dispatch(addPost());

                    return <SubmitPostStateless text={store.getState().profile.newPostText} onInputChange={onInputChange} onButtonClick={onButtonClick} />
                }
            }
        </StoreContext.Consumer>
    )
}

export { SubmitPost };
